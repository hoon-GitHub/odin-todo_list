import { format } from 'date-fns';
import { Todo, list } from './todo.js';
import { currentView, renderAll, renderProject } from "./render_list";
import { renderProjects } from "./render_nav.js";

// get the DOM elements in the dialog
const dialog = document.querySelector('dialog');
const dialogBtnDiv = document.getElementById('dialogBtnDiv');
const titleInput = document.getElementById('titleInput');
const descInput = document.getElementById('descInput');
const dueInput = document.getElementById('dueInput');
const priorityInput = document.getElementById('priorityInput');
const projectInput = document.getElementById('projectInput');
const confirmBtn = document.getElementById('confirmBtn');

// show the modal dialog with an add button, with current project auto-populated
export function renderAddDialog() {
  titleInput.value = "";
  descInput.value = "";
  dueInput.value = format(new Date(), "MM/dd/yyyy"); // default: today
  priorityInput.value = "med"; // default: med
  if (currentView == "all" || currentView == "date") {
    projectInput.value = "";
  } else {
    projectInput.value = currentView;
  }
  confirmBtn.innerText = "Add";

  // delete button is not applicable here!
  if (document.getElementById('deleteBtn')) document.getElementById('deleteBtn').remove();

  // process the add
  confirmBtn.onclick = (e) => {
    e.preventDefault();
    let newItem = new Todo(titleInput.value, descInput.value, dueInput.value, priorityInput.value, projectInput.value);
    list.push(newItem);

    // refresh the #content - try to accomodate the current view
    if (currentView == "all" || currentView == "date") {
      renderAll(list);
    } else {
      renderProject(list, currentView);
    }

    // also refresh the project list in the #nav
    renderProjects();
    newItem = null;
    dialog.close();
  }

  dialog.showModal();
}

// show the dialog with a save button, with all current data auto-populated
export function renderEditDialog(item) {
  titleInput.value = item.title;
  descInput.value = item.description;
  dueInput.value = format(item.dueDate, "MM/dd/yyyy");
  priorityInput.value = item.priority;
  projectInput.value = item.project;
  confirmBtn.innerText = "Save";

  // add a delete button, if not there already
  if (!document.getElementById('deleteBtn')) {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('dialogBtn');
    deleteBtn.id = 'deleteBtn';
    deleteBtn.innerText = "Delete";
    dialogBtnDiv.appendChild(deleteBtn);
  }
  // delete the item when clicked
  deleteBtn.onclick = (e) => {
    e.preventDefault();
    let index = null;

    // find the index using title and remove item
    for (let i = 0; i < list.length; i++) {
      if (list[i] === item) {
        index = i;
        console.log(i);
        list.splice(i, 1);
      }
    }

    // reload the #content
    if (currentView == "all" || currentView == "date") {
      renderAll(list);
    } else {
      renderProject(list, currentView);
    }

    // reload the project list in #nav
    renderProjects();
    dialog.close();
  }

  // save the edit
  confirmBtn.onclick = (e) => {
    e.preventDefault();
    item.title = titleInput.value;
    item.description = descInput.value;
    item.dueDate = new Date(dueInput.value);
    item.priority = priorityInput.value;
    item.project = projectInput.value;

    // refresh the #content - try to accomodate the current view
    if (currentView == "all" || currentView == "date") {
      renderAll(list);
    } else {
      renderProject(list, currentView);
    }

    // also refresh the project list in the #nav
    renderProjects();
    dialog.close();
  }

  dialog.showModal();
}