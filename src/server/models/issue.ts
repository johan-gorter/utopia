import mongoose, { Schema, Document } from 'mongoose';

export interface IIssue extends Document {
  title: string;
  description: string;
  status: 'open' | 'closed';
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
}

const IssueSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['open', 'closed'], default: 'open' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  tags: { type: [String], default: [] },
});

export default mongoose.model<IIssue>('Issue', IssueSchema);