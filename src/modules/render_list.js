import { format, isBefore } from 'date-fns';

const content = document.getElementById('content');
let currentView = null;

// main function: takes a list of Todo items and render in the #content
export function renderList(list) {
  for (let i = 0; i < list.length; i++) {
    const todoDom = document.createElement('div');
    todoDom.classList.add('todoItem');
    todoDom.innerText = list[i].info();
    content.appendChild(todoDom);
  }
  const addButton = document.createElement('button');
  addButton.id = 'addTodoBtn';
  addButton.innerText = '+';
  content.appendChild(addButton); // a button for adding a new Todo to the list
}

// filter-by-project view
export function renderProject(list, project) {
  currentView = project;
  list = list.filter(item => item.project === project);
  renderList(list);
}

// filter-by-date (before date) view
export function renderByDue(list, date) {
  currentView = date;
  list = list.filter(item => isBefore(item.dueDate, date));
  renderList(list);
}

// filter-by-tag view
export function renderByTag(list, tag) {
  currentView = tag;
  list = list.filter(item => item.tags.includes(tag));
  renderList(list);
}