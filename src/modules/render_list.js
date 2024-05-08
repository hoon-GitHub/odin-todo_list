import { isBefore } from 'date-fns';

const content = document.getElementById('content');
let currentView = "all";

// clear #content
export function clearContent() {
  while(content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

// main function: takes a list of Todo items and render in the #content
export function renderList(list) {
  for (let i = 0; i < list.length; i++) {
    const todoDom = document.createElement('div');
    todoDom.classList.add('todoItem');
    todoDom.innerText = list[i].info();

    // add color depending on priority
    if (list[i].priority === "HIGH") todoDom.style.color = 'var(--red)';
    else if (list[i].priority === "MED") todoDom.style.color = 'var(--yellow)';
    else if (list[i].priority === "LOW") todoDom.style.color = 'var(--green)';
    else break;

    content.appendChild(todoDom);
  }

  // add a button for creating a new Todo item
  const addButton = document.createElement('button');
  addButton.id = 'addTodoBtn';
  addButton.innerText = '+';
  content.appendChild(addButton);
}

// filter-by-project view
export function renderProject(list, project) {
  clearContent();
  currentView = project;
  list = list.filter(item => item.project === project);
  renderList(list);
}

// filter-by-date (before the date) view
export function renderByDue(list, date) {
  clearContent();
  currentView = date;
  list = list.filter(item => isBefore(item.dueDate, date));
  renderList(list);
}

// filter-by-tag view
export function renderByTag(list, tag) {
  clearContent();
  currentView = tag;
  list = list.filter(item => item.tags.includes(tag));
  renderList(list);
}