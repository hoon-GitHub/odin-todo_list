import { isBefore } from 'date-fns';
import { renderAddDialog, renderEditDialog } from './dialog.js';

const content = document.getElementById('content');
export let currentView = "all";

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

    // add an edit button for each Todo
    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.innerText = "edit";
    editBtn.addEventListener('click', () => renderEditDialog(list[i]));
    todoDom.appendChild(editBtn);

    // add color depending on priority
    if (list[i].priority === "high") todoDom.style.color = 'var(--high)';
    else if (list[i].priority === "med") todoDom.style.color = 'var(--med)';
    else if (list[i].priority === "low") todoDom.style.color = 'var(--low)';

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
  currentView = "all";
  clearContent();
  renderList(list);
}

// filter-by-date (before the date) view
export function renderByDue(list, date) {
  currentView = "date";
  clearContent();
  list = list.filter(item => isBefore(item.dueDate, date));
  renderList(list);
}

// filter-by-project view
export function renderProject(list, project) {
  clearContent();
  currentView = project;
  list = list.filter(item => item.project === project);
  renderList(list);
}

// filter-by-tag view
export function renderByTag(list, tag) {
  clearContent();
  list = list.filter(item => item.tags.includes(tag));
  renderList(list);
}