import './style.css';
import { renderNav } from './modules/render_nav.js';
import { renderList } from './modules/render_list.js';
import { list } from './modules/todo.js';

renderNav();
renderList(list);
