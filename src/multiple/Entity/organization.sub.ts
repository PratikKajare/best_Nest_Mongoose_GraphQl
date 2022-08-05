import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class organization {
  @Field((type) => String, { nullable: true })
  organizations: string;
  @Field((type) => ID, { nullable: true })
  id: string;
}
