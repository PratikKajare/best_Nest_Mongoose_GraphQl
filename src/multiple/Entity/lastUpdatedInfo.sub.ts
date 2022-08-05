import { Field, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType()
export class lastUpdatedInfo {
  @Prop()
  @Field({ nullable: true })
  updatedAt: string;
}
