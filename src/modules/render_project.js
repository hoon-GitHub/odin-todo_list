import { Project, sample } from './project.js';

const content = document.getElementById('content');

export function renderProject(proj) {
  for (let i = 0; i < proj.tasks.length; i++) {
    const todoDom = document.createElement('div');
    todoDom.classList.add('todoItem');
    todoDom.innerText = proj.tasks[i].info();
    content.appendChild(todoDom);
  }
  const addButton = document.createElement('button');
  addButton.id = 'addTodoBtn';
  addButton.innerText = '+';
  content.appendChild(addButton);
}