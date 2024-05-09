import { currentProject } from "./render_list";

const dialog = document.querySelector('dialog');
const titleInput = document.getElementById('titleInput');
const descInput = document.getElementById('descInput');
const dueInput = document.getElementById('dueInput');
const priorityInput = document.getElementById('priorityInput');
const projectInput = document.getElementById('projectInput');
const confirmBtn = document.getElementById('confirmBtn');

export function renderAddDialog(view) {
  confirmBtn.innerText = "Add";
  projectInput.value = currentProject;
  dialog.showModal();
}

export function renderEditDialog(view) {
  confirmBtn.innerText = "Save";
  dialog.showModal();
}