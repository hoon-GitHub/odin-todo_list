import { format, isValid } from 'date-fns';
import { Todo } from './todo.js';
import { currentView, renderAll, renderProject } from "./render_list";
import { renderProjects } from "./render_nav.js";
import { list } from '../index.js';

// get the DOM elements in the dialog
const dialog = document.querySelector('dialog');
const dialogBtnDiv = document.getElementById('dialogBtnDiv');
const titleInput = document.getElementById('titleInput');
const descInput = document.getElementById('descInput');
const dueInput = document.getElementById('dueInput');
const priorityInput = document.getElementById('priorityInput');
const projectInput = document.getElementById('projectInput');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');

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

  titleInput.style.border = "none"; // reset title validation indicator
  titleInput.placehloder = "";
  dueInput.style.border = "none"; // reset dueDate validation indicator
  dueInput.placehloder = "";

  // process the add
  confirmBtn.onclick = (e) => {
    e.preventDefault();

    // validate title and date before proceeding to add
    if (titleInput.value == "") {
      titleInput.style.border = "2px solid red";
      titleInput.placeholder = "Title is required";
    } else if (!isValid(new Date(dueInput.value))) {
      dueInput.style.border = "2px solid red";
      dueInput.placeholder = "Invalid date - please try again";
      dueInput.value = "";
    } else {
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

      // and finally save it to localStorage
      localStorage.setItem("hoonTodoList", JSON.stringify(list));
    }
  }

  // cancel button
  cancelBtn.innerText = "Cancel";
  cancelBtn.onclick = dialog.close();

  // delete button is not applicable here!
  if (document.getElementById('deleteBtn')) document.getElementById('deleteBtn').remove();

  dialog.showModal();
}

// show the dialog with a save button, with all current data auto-populated
export function renderEditDialog(item) {
  titleInput.value = item.title;
  descInput.value = item.description;
  dueInput.value = item.dueDate;
  priorityInput.value = item.priority;
  projectInput.value = item.project;
  confirmBtn.innerText = "Save";

  titleInput.style.border = "none"; // reset title validation indicator
  titleInput.placeholder = "";
  dueInput.style.border = "none"; // reset dueDate validation indicator
  dueInput.placehloder = "";

  // save the edit
  confirmBtn.onclick = (e) => {
    e.preventDefault();

    // validate title and date before proceeding to saving the edit
    if (titleInput.value == "") {
      titleInput.style.border = "2px solid red";
      titleInput.placeholder = "Title is required"
    } else if (!isValid(new Date(dueInput.value))) {
      dueInput.style.border = "2px solid red";
      dueInput.placeholder = "Invalid date - please try again";
      dueInput.value = "";
    } else {
      item.title = titleInput.value;
      item.description = descInput.value;
      item.dueDate = format(new Date(dueInput.value), "MM/dd/yyyy");
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

      // and finally save it to localStorage
      localStorage.setItem("hoonTodoList", JSON.stringify(list));
    }
  }

  // cancel button
  cancelBtn.innerText = "Cancel";
  cancelBtn.onclick = dialog.close();

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

    // and finally save it to localStorage
    localStorage.setItem("hoonTodoList", JSON.stringify(list));
  }

  dialog.showModal();
}