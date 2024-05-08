import './style.css';
import { Item } from './modules/item.js';
import { Project } from './modules/project.js';

const sample1 = new Item('title1', 'Sample description', 'sample dueDate', 'high');
const sample2 = new Item('title2', 'Sample description', 'sample dueDate', 'med');
const sample3 = new Item('title3', 'Sample description', 'sample dueDate', 'low');
const sample4 = new Item('title4', 'Sample description', 'sample dueDate', 'high');
const sample5 = new Item('title5', 'Sample description', 'sample dueDate', 'low');
const sample6 = new Item('title6', 'Sample description', 'sample dueDate', 'high');
const sample7 = new Item('title7', 'Sample description', 'sample dueDate', 'med');
const sample8 = new Item('title8', 'Sample description', 'sample dueDate', 'low');
const sample9 = new Item('title9', 'Sample description', 'sample dueDate', 'high');
const sample10 = new Item('title10', 'Sample description', 'sample dueDate', 'med');

sample1.addTag('work');
sample5.addTag('work');
sample10.addTag('work');

const list = new Project('sample');
list.addTask(sample1);
list.addTask(sample2);
list.addTask(sample3);
list.addTask(sample4);
list.addTask(sample5);
list.addTask(sample6);
list.addTask(sample7);
list.addTask(sample8);
list.addTask(sample9);
list.addTask(sample10);

window.list = list;
window.sample1 = sample1;
window.Item = Item;
window.Project = Project;