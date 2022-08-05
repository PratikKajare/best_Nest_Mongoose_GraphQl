import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class attachements {
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  filePath: string;
  @Field({ nullable: true })
  type: string;
  @Field({ nullable: true })
  size: string;
}
