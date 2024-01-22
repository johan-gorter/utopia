import mongoose, { Schema, Document } from 'mongoose';

export interface IIssue extends Document {
  id: number;
  title: string;
  description: string;
  status: 'Open' | 'In Progress' | 'Closed';
  priority: 'Low' | 'Medium' | 'High';
  assignee: string;
  reporter: string;
  createdAt: Date;
  updatedAt: Date;
}

const IssueSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Open', 'In Progress', 'Closed'], default: 'Open' },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
  assignee: { type: String, required: true },
  reporter: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

IssueSchema.pre<IIssue>('save', function(next) {
  if (!this.isNew) {
    this.updatedAt = new Date();
  }
  next();
});

export default mongoose.model<IIssue>('Issue', IssueSchema);