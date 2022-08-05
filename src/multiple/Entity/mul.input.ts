import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@InputType()
export class MulInput {
  @Field(() => ID, { nullable: true })
  _id: string;
  @Field({ nullable: true })
  title: string;
  @Field({ nullable: true })
  dueDate: string;
  @Field({ nullable: true })
  instructions: string;
  // attachements
  @Field((type) => [attachements], { nullable: true })
  attachements: attachements[];

  @Field(() => Boolean, { nullable: true })
  shouldEmailAssignees: Boolean;
  @Field({ nullable: true })
  managerId: string;
  @Field({ nullable: true })
  status: string;
  // learningItemCollections

  @Field((type) => [String], { nullable: true })
  learningItemCollections: [string];

  @Field({ nullable: true })
  assignType: string;
  // assignees

  @Field((type) => [assignees], { nullable: true })
  assignees: assignees[];

  // author

  @Field((type) => [author], { nullable: true })
  author: author[];
  // lastUpdatedInfo

  @Field((type) => [lastUpdatedInfo], { nullable: true })
  lastUpdatedInfo: lastUpdatedInfo[];
  @Field({ nullable: true })
  createdAt: string;
}

@InputType()
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

@InputType()
export class assignees {
  @Field({ nullable: true })
  assignType: string;
  @Prop()
  @Field((type) => [String], { nullable: true })
  selectedUsers: [string];
}

@InputType()
export class author {
  @Field({ nullable: true })
  name: string;
  @Field((type) => ID, { nullable: true })
  id: string;
  @Prop()
  @Field((type) => [organization], { nullable: true })
  organization: organization[];
}
@InputType()
export class lastUpdatedInfo {
  @Prop()
  @Field({ nullable: true })
  updatedAt: string;
}
//sub-sub part
@InputType()
export class organization {
  @Field((type) => String, { nullable: true })
  organizations: string;
  @Field((type) => ID, { nullable: true })
  id: string;
}
