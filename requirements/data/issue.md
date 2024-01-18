# Issue Data Structure

| Field        | Type     | Description                              | Options                  | Example                |
|--------------|----------|------------------------------------------|--------------------------|------------------------|
| id           | Integer  | Unique issue identifier                  | -                        | 101                    |
| title        | String   | Issue title                              | -                        | "Login bug"            |
| description  | Text     | Issue details                            | -                        | "User cannot log in..."|
| status       | String   | Issue status                             | Open, In Progress, Closed| "In Progress"          |
| priority     | String   | Issue priority                           | Low, Medium, High        | "High"                 |
| assignee     | String   | Assigned user                            | -                        | "jdoe"                 |
| reporter     | String   | Reporting user                           | -                        | "asmith"               |
| created_at   | DateTime | Issue creation timestamp                 | -                        | "2022-01-01 12:00:00"  |
| updated_at   | DateTime | Issue last update timestamp              | -                        | "2022-01-02 14:30:00"  |
| due_date     | Date     | Issue due date (optional)                | -                        | "2022-01-10"           |
| tags         | Array    | Issue tags (optional)                    | -                        | ["bug", "login"]       |
