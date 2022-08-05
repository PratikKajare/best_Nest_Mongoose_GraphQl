import mongoose from 'mongoose';

export const MulSchema = new mongoose.Schema({
  _id: String,
  title: String,
  dueDate: String,
  instructions: String,

  // attachements: Array,
  attachements: {
    type: Array,
    ref: 'attachementsSchema',
  },
  shouldEmailAssignees: Boolean,
  managerId: String,
  status: String,

  learningItemCollections: [String],

  assignType: String,
  // assignees: Array,
  assignees: {
    type: Array,
    ref: 'assigneesSchema',
  },
  // selectedUsers: Array,

  author: Array,

  lastUpdatedInfo: Array,

  createdAt: String,
});

export const attachementsSchema = mongoose.model(
  'attachementsSchema',
  new mongoose.Schema({
    name: String,
    filePath: String,
    type: String,
    size: String,
  }),
);
export const assigneesSchema = mongoose.model(
  'assigneesSchema',
  new mongoose.Schema({
    assignType: String,
    selectedUsers: [String],
  }),
);
