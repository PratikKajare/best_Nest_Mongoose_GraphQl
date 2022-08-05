import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class assignees {
  @Field({ nullable: true })
  assignType: string;
  @Prop()
  @Field((type) => [String], { nullable: true })
  selectedUsers: [string];
}
