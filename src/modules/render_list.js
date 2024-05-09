import { isBefore } from 'date-fns';
import { renderAddDialog } from './dialog.js';

const content = document.getElementById('content');
export let currentProject = "";

// clear #content
export function clearContent() {
  while(content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

// main function: takes a list of Todo items and render in the #content
export function renderList(list) {
  console.log(currentProject);
  for (let i = 0; i < list.length; i++) {
    const todoDom = document.createElement('div');
    todoDom.classList.add('todoItem');
    todoDom.innerText = list[i].info();

    // add color depending on priority
    if (list[i].priority === "HIGH") todoDom.style.color = 'var(--high)';
    else if (list[i].priority === "MED") todoDom.style.color = 'var(--med)';
    else if (list[i].priority === "LOW") todoDom.style.color = 'var(--low)';

    content.appendChild(todoDom);
  }

  // add a button for creating a new Todo item
  const addButton = document.createElement('button');
  addButton.id = 'addTodoBtn';
  addButton.innerText = '+';
  content.appendChild(addButton);

  // add button functionality
  addButton.addEventListener('click', () => renderAddDialog());

}

// default, view all Todo items
export function renderAll(list) {
  clearContent();
  renderList(list);
}

// filter-by-date (before the date) view
export function renderByDue(list, date) {
  clearContent();
  list = list.filter(item => isBefore(item.dueDate, date));
  renderList(list);
}

// filter-by-project view
export function renderProject(list, project) {
  clearContent();
  currentProject = project;
  list = list.filter(item => item.project === project);
  renderList(list);
}

// filter-by-tag view
export function renderByTag(list, tag) {
  clearContent();
  list = list.filter(item => item.tags.includes(tag));
  renderList(list);
}