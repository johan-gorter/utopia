import express, { Request, Response } from 'express';
import Issue, { IIssue } from '../models/issue';

const router = express.Router();

// List all issues
router.get('/', async (req: Request, res: Response) => {
  try {
    const issues: IIssue[] = await Issue.find();
    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching issues' });
  }
});

// Update an issue
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  try {
    const issue: IIssue | null = await Issue.findByIdAndUpdate(
      id,
      { title, description, status, updatedAt: new Date() },
      { new: true }
    );

    if (!issue) {
      res.status(404).json({ message: 'Issue not found' });
    } else {
      res.json(issue);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating issue' });
  }
});

export default router;