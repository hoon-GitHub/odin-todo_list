import { isDate } from 'date-fns';
import { currentView } from "./render_list";

const dialog = document.querySelector('dialog');
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
  dueInput.value = "";
  priorityInput.value = "med";
  if (currentView == "all" || currentView == "date") {
    projectInput.value = "";
  } else {
    projectInput.value = currentView;
  }
  confirmBtn.innerText = "Add";
  dialog.showModal();
}

// show the dialog with a save button, with all current data auto-populated
export function renderEditDialog(item) {
  titleInput.value = item.title;
  descInput.value = item.description;
  dueInput.value = item.dueDate;
  priorityInput.value = item.priority;
  if (currentView == "all" || currentView == "date") {
    projectInput.value = "";
  } else {
    projectInput.value = currentView;
  }
  confirmBtn.innerText = "Save";
  dialog.showModal();
}