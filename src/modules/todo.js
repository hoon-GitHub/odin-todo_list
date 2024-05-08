import { format } from 'date-fns';

// Todo item is the basic building block
export class Todo {
  
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.entryDate = format(new Date(), 'MM-dd-yyyy');
    this.dueDate = dueDate;
    this.priority = priority.toUpperCase();
    this.completion = false;
    this.tags = [];
  }

  addTag(tag) {
    this.tags.push(tag);
  }

  removeTag(tag) {
    this.tags = this.tags.filter(item => item != tag);
  }

  removeAllTags() {
    this.tags = [];
  }

  info() {
    return `${this.title} | ${this.entryDate} | ${this.dueDate} | ${this.priority} | ${this.tags}`;
  }

}