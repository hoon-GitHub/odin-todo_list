// Todo item is the basic building block
export class Todo {
  
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
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
    console.log(`${this.title} / ${this.dueDate} / ${this.priority} / ${this.tags}`);
  }

}