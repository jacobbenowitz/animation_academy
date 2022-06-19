export default class TodoFunctionality {
  constructor(todoList, todoForm, todoStorage) {
    this.todoList = todoList; // ul
    this.todoForm = todoForm; // form
    this.todoStorage = todoStorage; // localStorage array
    this.todoContainer = document.querySelector('.todo-list-container')
    this.bindHandler();
    this.addEventListeners();
    this.populateList(this.todoStorage, this.todoList);
  }

  bindHandler() {
    this.addNewTodo = this.addNewTodo.bind(this);
    this.populateList = this.populateList.bind(this); // bind this to callback
    this.toggleDone = this.toggleDone.bind(this); // bind this to callback
    this.reset = this.reset.bind(this);
  }

  addEventListeners() {
    // add event listener on submit button
    this.todoForm.addEventListener('submit', this.addNewTodo);
    // add event listener on list items - toggle done
    this.todoContainer.addEventListener('click', this.reset)
    this.todoList.addEventListener('click', this.toggleDone);
  }

  addNewTodo(e) {
    e.preventDefault();
    // pull input text from form
    const todoText = document.querySelector('[name=todo]').value;
    // create POJO
    const todoObj = {
      todoText,
      done: false
    };
    // add todo to our todoStorage array and populate list of todo's
    this.todoStorage.push(todoObj);
    this.populateList(this.todoStorage, this.todoList);
    // save in user's local storage
    localStorage.setItem('todo-items', JSON.stringify(this.todoStorage));
    // reset event listener 
    e.currentTarget.reset();
  }

  // update user's list of todos rendered on the browser
  populateList(todoStorage = [], todoList) {
    // iterate through all todo items and map to todoList
    todoList.textContent = todoStorage.map((todo, i) => {
      return `
      <li class = "todo-item ${todo.done ? 'done' : 'default'}" >
      <input type="checkbox" class = 'checkbox' data-index=${i} ${todo.done ? 'checked' : ''} />
      <label for="todo${i}">${todo.todoText}</label>
      </li>
      `;
    }).join('');
  }

  toggleDone(e) {
    // ensure click is on the checkbox, othersise skip
    if (!e.target.matches('input')) return;
    const todo = e.target;
    // find index to match checkbox with the todo item
    const index = todo.dataset.index;
    this.todoStorage[index].done = !this.todoStorage[index].done; // flip status
    // save todo to storage, render on DOM
    localStorage.setItem('todo-items', JSON.stringify(this.todoStorage));
    this.populateList(this.todoStorage, this.todoList);
  }

  reset(e) {
    const resetButton = document.querySelector('.todo-reset');
    if (e.target === resetButton) {
      localStorage.removeItem('todo-items');
      this.todoStorage = [];
    }
    this.populateList(this.todoStorage, this.todoList);
  }

}