# Issue

An Issue represents a single task or bug that needs to be completed. Issues are created by users and assigned to other users. Issues can be tagged with keywords to help with organization and searching.

## Relations

- [**Comment**](comment.md) (One to Many)
  An issue has many comments.

## Fields

- **id** (Integer)    
  Unique issue identifier. Is automatically assigned when the issue is created.  
  Example: 101

- **title** (String)    
  Short and descriptive title of the issue  
  Example: "Login bug"

- **description** (Text)  
  Detailed description of the issue  
  Example: "User cannot log in due to..."

- **status** (String)  
  Current status of the issue  
  Options: Open, In Progress, Closed  
  Example: "In Progress"

- **priority** (String)  
  Priority level of the issue  
  Options: Low, Medium, High  
  Example: "High"

- **assignee** (String)  
  Username of the user assigned to the issue  
  Example: "jdoe"

- **reporter** (String)  
  Username of the user who reported the issue  
  Example: "asmith"

- **created_at** (DateTime)  
  Timestamp when the issue was created  
  Example: "2022-01-01 12:00:00"

- **updated_at** (DateTime)  
  Timestamp when the issue was last updated  
  Example: "2022-01-02 14:30:00"
