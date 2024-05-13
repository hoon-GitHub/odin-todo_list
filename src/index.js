import './style.css';
import { addDays } from 'date-fns';
import { Todo } from './modules/todo.js';
import { renderNav } from './modules/render_nav.js';
import { renderList } from './modules/render_list.js';
import { loadLocalStorage } from './modules/localStorage.js';

// the main global placeholder for Todo items
export let list = [];

// create a sample list for testing
list.push(new Todo('Sample 01', 'This is just a sample todo item. Please feel free to delete.', Date(), 'high', 'Sample Project 1'));
list.push(new Todo('Sample 02', 'This is just a sample todo item. Please feel free to delete.', addDays(Date(), 3), 'med', 'Sample Project 1'));
list.push(new Todo('Sample 03', 'This is just a sample todo item. Please feel free to delete.', addDays(Date(), 10), 'low', 'Sample Project 1'));
list.push(new Todo('Sample 01-1', 'This is just a sample todo item. Please feel free to delete.', Date(), 'high', 'Sample Project 2'));
list.push(new Todo('Sample 02-1', 'This is just a sample todo item. Please feel free to delete.', addDays(Date(), 3), 'med', 'Sample Project 2'));
list.push(new Todo('Sample 03-1', 'This is just a sample todo item. Please feel free to delete.', addDays(Date(), 10), 'low', 'Sample Project 2'));

// initial render, after loading from localStorage (if data exists)
loadLocalStorage();
renderNav();
renderList(list);

// make list global for console access, for testing/debugging
window.list = list;