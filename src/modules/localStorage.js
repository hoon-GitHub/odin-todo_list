import { list } from '../index.js';
import { Todo } from './todo.js';

// function will try to load data from localStorage (if exists)
export function loadLocalStorage() {

  // if there is data in localStorage, load data onto the list[]
  if (localStorage.getItem("hoonTodoList")) {
    const temp = JSON.parse(localStorage.getItem("hoonTodoList"));
    list.length = 0; // delete current contents of the list[]
    for (let i = 0; i < temp.length; i++) { // generate Todo item and load onto list[]
      list.push(new Todo(temp[i].title, temp[i].description, temp[i].dueDate, temp[i].priority, temp[i].project, temp[i].completed));
    }
    console.info("Data in localStorage found. Loading the current data from the localStorage..");
  } else {
    // if not, save the provided sample list to the localStorage
    localStorage.setItem("hoonTodoList", JSON.stringify(list));
    console.info("No data exist in your localStorage. Sample data is saved to localStorage.")
  }

}