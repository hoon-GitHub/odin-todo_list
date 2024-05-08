import { Todo } from './todo.js';

// Project is a collection of Todo items
export class Project {

  constructor(projName) {
    this.projName = projName;
    this.tasks = [];
  }

  addTodo(title, description, dueDate, priority) {
    const task = new Todo(title, description, dueDate, priority);
    this.tasks.push(task);
  }

  removeTodo(title) {
    this.tasks = this.tasks.filter(task => task.title != title);
  }

  info() {
    for (let i = 0; i < this.tasks.length; i++) {
      this.tasks[i].info();
    }
  }

}

// create a sample project for testing purpose
export const sample = new Project('sample');

sample.addTodo('title1', 'Sample description', 'sample dueDate', 'high');
sample.addTodo('title2', 'Sample description', 'sample dueDate', 'med');
sample.addTodo('title3', 'Sample description', 'sample dueDate', 'low');
sample.addTodo('title4', 'Sample description', 'sample dueDate', 'high');
sample.addTodo('title5', 'Sample description', 'sample dueDate', 'low');
sample.addTodo('title6', 'Sample description', 'sample dueDate', 'high');
sample.addTodo('title7', 'Sample description', 'sample dueDate', 'med');
sample.addTodo('title8', 'Sample description', 'sample dueDate', 'low');
sample.addTodo('title9', 'Sample description', 'sample dueDate', 'high');
sample.addTodo('title10', 'Sample description', 'sample dueDate', 'med');

sample.tasks[0].addTag('work');
sample.tasks[4].addTag('work');
sample.tasks[9].addTag('work');
