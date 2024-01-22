import mongoose, { Document, Schema } from 'mongoose';

interface IComment extends Document {
  username: string;
  content: string;
  created_at: Date;
  updated_at: Date;
}

const CommentSchema: Schema = new Schema({
  username: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

CommentSchema.pre<IComment>('save', function(next) {
  if (!this.isNew) {
    this.updated_at = new Date();
  }
  next();
});

const Comment = mongoose.model<IComment>('Comment', CommentSchema);

export default Comment;