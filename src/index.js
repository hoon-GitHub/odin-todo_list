import './style.css';
import { Project, sample } from './modules/project.js';
import { renderProject } from './modules/render_project.js';

// initially render sample project by default
renderProject(sample);

// making the imports to be global for access from console, for testing
window.sample = sample;
window.Project = Project;