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
    return `${this.title} | ${this.dueDate} | ${this.project} | ${this.tags}`;
  }

}


// create a sample list of Todo items, for testing purposes
export let sample = [];
sample.push(new Todo('title01', 'Sample description 01', '05/08/2024', 'high', 'sample'));
sample.push(new Todo('title02', 'Sample description 02', '05/09/2024', 'med', 'sample'));
sample.push(new Todo('title03', 'Sample description 03', '05/08/2024', 'low', 'sample'));
sample.push(new Todo('title04', 'Sample description 04', '05/10/2024', 'high', 'sample'));
sample.push(new Todo('title05', 'Sample description 05', '05/15/2024', 'low', 'sample'));
sample.push(new Todo('title06', 'Sample description 06', '06/01/2024', 'high', 'sample'));
sample.push(new Todo('title07', 'Sample description 07', '05/11/2024', 'med', 'sample'));
sample.push(new Todo('title08', 'Sample description 08', '05/08/2024', 'low', 'sample'));
sample.push(new Todo('title09', 'Sample description 09', '06/20/2024', 'high', 'sample'));
sample.push(new Todo('title10', 'Sample description 10', '05/09/2024', 'med', 'sample'));

// add some tags
sample[0].addTag('work');
sample[1].addTag('personal');
sample[2].addTag('personal');
sample[4].addTag('work');
sample[5].addTag('personal');
sample[7].addTag('personal');
sample[9].addTag('work');