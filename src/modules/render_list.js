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
    const infoDom = document.createElement('div');
    todoDom.classList.add('todoItem');
    
    // checkbox
    const checkBox = document.createElement('i');
    checkBox.classList.add('fa-solid');
    if (list[i].completed) {
      checkBox.classList.add('fa-square-check');
      todoDom.appendChild(checkBox);
      infoDom.style.setProperty("text-decoration", "line-through");
    } else {
      checkBox.classList.add('fa-square');
      todoDom.appendChild(checkBox);
    }

    // checkbox click - toggle completed
    checkBox.onclick = () => {
      if (list[i].completed) {
        list[i].completed = false;
        checkBox.classList.remove('fa-square-check');
        checkBox.classList.add('fa-square');
        infoDom.style.setProperty("text-decoration", "none");
      }
      else {
        list[i].completed = true;
        checkBox.classList.remove('fa-square');
        checkBox.classList.add('fa-square-check');
        infoDom.style.setProperty("text-decoration", "line-through");
      }
    }

    // main information
    infoDom.innerText = list[i].info();
    todoDom.appendChild(infoDom);

    // add an edit button for each Todo
    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.innerText = "edit";
    editBtn.onclick = () => renderEditDialog(list[i]);
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