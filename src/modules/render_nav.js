import { addDays } from 'date-fns';
import { renderAll, renderByDue, renderProject } from './render_list.js';
import { list } from '../index.js';

const nav = document.getElementById('nav');

// set up the #nav
export function renderNav() {

  // attach event listeners to #all, #today, #oneWeek in #nav
  const all = document.getElementById('all');
  all.addEventListener('click', () => renderAll(list));
  const today = document.getElementById('today');
  today.addEventListener('click', () => renderByDue(list, Date()));
  const oneWeek = document.getElementById('oneWeek');
  oneWeek.addEventListener('click', () => renderByDue(list, addDays(Date(), 7)));

  // and then render projects
  renderProjects();
}

// render menu items in the #nav
export function renderProjects() {

  // clear the project list for a refresh
  document.querySelectorAll('.projects').forEach(el => el.remove());

  // get all projects currently being used
  const projects = new Set();
  for (let i = 0; i < list.length; i++) {
    if (list[i].project != "") projects.add(list[i].project);
  }

  // for each project, create button and append to #nav
  projects.forEach(project => {
    const projMenuItem = document.createElement('button');
    projMenuItem.classList.add('projects');
    projMenuItem.innerText = project;
    nav.appendChild(projMenuItem);

    // when clicked, render list in the #content
    projMenuItem.addEventListener('click', () => {
      renderProject(list, project);
    });
  })
}