import './style.css';
import { Todo } from './modules/todo.js';
import { Project, sample } from './modules/project.js';

// making the imports to be global for access from console, for testing
window.sample = sample;
window.Todo = Todo;
window.Project = Project;