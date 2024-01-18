# Comment

A Comment represents a single comment on an issue. Comments are created by users and are associated with a single issue.

## Relations

- [**Issue**](issue.md) (Many to One)  
  A comment belongs to an issue.

## Fields

- **id** (Integer)  
  Unique comment identifier  
  Example: 1

- **author** (String)  
  Username of the user who wrote the comment  
  Example: "jdoe"

- **content** (Text)  
  Text content of the comment  
  Example: "I'm working on it..."

- **created_at** (DateTime)  
  Timestamp when the comment was created  
  Example: "2022-01-02 13:15:00"

- **updated_at** (DateTime)  
  Timestamp when the comment was last updated  
  Example: "2022-01-02 13:20:00"