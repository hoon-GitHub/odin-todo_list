import { format, addDays } from 'date-fns';

// Todo item is the basic building block
export class Todo {
  
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority.toLowerCase();
    this.project = project;
    this.completed = false;
  }

  info() {
    return `${this.title} - due ${format(this.dueDate, 'MM/dd')} - ${this.project}`;
  }

}

// a main global holder of Todo items
export let list = [];

/*
// create a sample list for testing
list.push(new Todo('title01', 'Sample description 01', Date(), 'high', 'project1'));
list.push(new Todo('title02', 'Sample description 02', addDays(Date(), 2), 'med', 'project1'));
list.push(new Todo('title03', 'Sample description 03', Date(), 'low', 'project1'));
list.push(new Todo('title04', 'Sample description 04', addDays(Date(), 5), 'high', 'project1'));
list.push(new Todo('title05', 'Sample description 05', addDays(Date(), 10), 'low', 'project2'));
list.push(new Todo('title06', 'Sample description 06', addDays(Date(), 4), 'high', 'project2'));
list.push(new Todo('title07', 'Sample description 07', addDays(Date(), 20), 'med', 'project2'));
list.push(new Todo('title08', 'Sample description 08', Date(), 'low', 'project3'));
list.push(new Todo('title09', 'Sample description 09', addDays(Date(), 30), 'high', 'project3'));
list.push(new Todo('title10', 'Sample description 10', addDays(Date(), 2), 'med', 'project3'));

list[1].completed = true;
list[3].completed = true;
list[7].completed = true;
*/