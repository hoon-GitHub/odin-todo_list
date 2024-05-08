const content = document.getElementById('content');
let currentView = null;

// main function: takes a list of Todo items and render in the #content
export function renderList(list) {
  for (let i = 0; i < list.length; i++) {
    const todoDom = document.createElement('div');
    todoDom.classList.add('todoItem');
    todoDom.innerText = list[i].info();
    content.appendChild(todoDom);
  }
  const addButton = document.createElement('button');
  addButton.id = 'addTodoBtn';
  addButton.innerText = '+';
  content.appendChild(addButton);
}

export function renderProject(project) {

}

export function renderByDue(date) {

}

export function renderByTag(tag) {

}