import { format } from 'date-fns';

// Todo item is the basic building block
export class Todo {
  
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    // this.entryDate = format(new Date(), 'MM-dd-yyyy');
    this.dueDate = dueDate;
    this.priority = priority.toUpperCase();
    this.project = project;
    this.tags = [];
    this.completion = false;
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
    return `${this.title} | ${format(this.dueDate, 'MM/dd/yyyy')} | ${this.project} | ${this.tags}`;
  }

}


// create a sample list of Todo items, for testing purposes
export let list = [];
list.push(new Todo('title01', 'Sample description 01', '05/08/2024', 'high', 'sample1'));
list.push(new Todo('title02', 'Sample description 02', '05/09/2024', 'med', 'sample1'));
list.push(new Todo('title03', 'Sample description 03', '05/08/2024', 'low', 'sample1'));
list.push(new Todo('title04', 'Sample description 04', '05/10/2024', 'high', 'sample1'));
list.push(new Todo('title05', 'Sample description 05', '05/19/2024', 'low', 'sample1'));
list.push(new Todo('title06', 'Sample description 06', '06/01/2024', 'high', 'sample2'));
list.push(new Todo('title07', 'Sample description 07', '05/11/2024', 'med', 'sample2'));
list.push(new Todo('title08', 'Sample description 08', '05/08/2024', 'low', 'sample2'));
list.push(new Todo('title09', 'Sample description 09', '06/20/2024', 'high', 'sample2'));
list.push(new Todo('title10', 'Sample description 10', '05/09/2024', 'med', 'sample2'));

// add some tags
list[0].addTag('work');
list[1].addTag('personal');
list[2].addTag('personal');
list[4].addTag('work');
list[5].addTag('personal');
list[7].addTag('personal');
list[9].addTag('work');