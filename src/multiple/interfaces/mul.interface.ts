import { Document } from 'mongoose';
import { assignees } from '../Entity/assignees.sub';
import { attachements } from '../Entity/attachment.sub';
import { author } from '../Entity/author.sub';
import { lastUpdatedInfo } from '../Entity/lastUpdatedInfo.sub';

export interface Mul extends Document {
  _id: string;
  title: string;
  dueDate: string;
  instructions: string;
  attachements: attachements[];
  shouldEmailAssignees: boolean;
  managerId: string;
  status: string;
  // learningItemCollections
  learningItemCollections: [string];
  assignType: string;

  // assignees
  assignees: assignees[];
  // author
  author: author[];
  // lastUpdatedInfo
  lastUpdatedInfo: lastUpdatedInfo[];
  createdAt: string;
}
