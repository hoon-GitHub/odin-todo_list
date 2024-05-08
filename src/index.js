import './style.css';
import { format, addDays } from 'date-fns';
import { list } from './modules/todo.js';
import { renderList, renderProject, renderByDue, renderByTag } from './modules/render_list.js';

// rendering test cases
renderList(list); //whole list
// renderProject(list, 'sample1'); // filter by project
// renderByDue(list, Date()); // today
// renderByDue(list, addDays(Date(), 7)); // specific date
// renderByTag(list, 'personal'); // filter by tag

// making the imports to be global for access from console, for testing
window.list = list;