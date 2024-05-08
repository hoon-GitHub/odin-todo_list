import './style.css';
import { sample } from './modules/todo.js';
import { renderList, renderProject, renderByDue, renderByTag } from './modules/render_list.js';

// initially render sample project by default
renderList(sample);
// renderByDue(Date());
// renderByTag('work');

// making the imports to be global for access from console, for testing
window.sample = sample;