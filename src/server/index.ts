import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import issueRoutes from './api/issueRoutes';

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my-web-app', {
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Register issue routes
app.use('/api/issues', issueRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});