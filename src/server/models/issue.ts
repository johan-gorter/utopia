import mongoose, { Schema, Document } from 'mongoose';

/**
 * The data structure is described [here](../../../requirements/data/issue.md)
 */
export interface IIssue extends Document {
  id: number;
  title: string;
  description: string;
  
}

const IssueSchema: Schema = new Schema({
});

export default mongoose.model<IIssue>('Issue', IssueSchema);