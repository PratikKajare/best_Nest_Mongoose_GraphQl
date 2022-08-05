import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { organization } from './organization.sub';

@ObjectType()
export class author {
  @Field({ nullable: true })
  name: string;
  @Field((type) => ID, { nullable: true })
  id: string;
  @Prop()
  @Field((type) => [organization], { nullable: true })
  organization: organization[];
}
