import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema } from '@nestjs/mongoose';
import { IsString } from 'class-validator';
import { assignees } from './assignees.sub';
import { attachements } from './attachment.sub';
import { author } from './author.sub';
import { lastUpdatedInfo } from './lastUpdatedInfo.sub';

@ObjectType()
@Schema()
export class MulType {
  @Field(() => ID, { nullable: true })
  _id: string;
  @Prop()
  @Field({ nullable: true })
  @IsString()
  title: string;
  @Prop()
  @Field({ nullable: true })
  dueDate: string;
  @Prop()
  @Field({ nullable: true })
  instructions: string;
  // attachements:array;
  @Prop()
  @Field((type) => [attachements], { nullable: true })
  attachements: attachements[];

  @Field(() => Boolean, { nullable: true })
  shouldEmailAssignees: Boolean;
  @Field({ nullable: true })
  managerId: string;
  @Field({ nullable: true })
  status: string;
  // learningItemCollections
  @Prop()
  @Field((type) => [String], { nullable: true })
  learningItemCollections: [string];

  @Field({ nullable: true })
  assignType: string;
  // assignees
  @Prop()
  @Field((type) => [assignees], { nullable: true })
  assignees: assignees[];

  // author
  @Prop()
  @Field((type) => [author], { nullable: true })
  author: author[];
  // lastUpdatedInfo
  @Prop()
  @Field((type) => [lastUpdatedInfo], { nullable: true })
  lastUpdatedInfo: lastUpdatedInfo[];
  @Field({ nullable: true })
  createdAt: string;
}
