import { format } from 'date-fns';

// Todo item is the basic building block
export class Todo {
  
  constructor(title, description, dueDate, priority, project, completed=false) {
    this.title = title;
    this.description = description;
    this.dueDate = format(dueDate, "MM/dd/yyyy");
    this.priority = priority.toLowerCase();
    this.project = project;
    this.completed = completed;
  }

  info() {
    return `${this.title} - due ${this.dueDate} - ${this.project}`;
  }

}