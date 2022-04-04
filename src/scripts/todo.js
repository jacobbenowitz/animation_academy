export default class TodoFunctionality {
  constructor(todoListContainer, todoForm, todoStorage) {
    this.todoListContainer = todoListContainer; // ul
    this.todoForm = todoForm; // form
    this.todoStorage = todoStorage; // localStorage array
    this.addNewTodo = this.addNewTodo.bind(this); // bind this to callback
    // add event listener on submit button
    this.todoForm.addEventListener('submit', this.addNewTodo);
    // add event listener on list items - toggle done
    this.toggleDone = this.toggleDone.bind(this); // bind this to callback
    this.todoListContainer.addEventListener('click', this.toggleDone);
    this.populateList = this.populateList.bind(this); // bind this to callback
    this.populateList(this.todoStorage, this.todoListContainer);
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
    this.populateList(this.todoStorage, this.todoListContainer);
    // save in user's local storage
    localStorage.setItem('todo-items', JSON.stringify(this.todoStorage));
    // reset event listener 
    e.currentTarget.reset();
  }

  // update user's list of todos rendered on the browser
  populateList(todoStorage = [], todoListContainer) {
    // iterate through all todo items and map to todoListContainer
    todoListContainer.innerHTML = todoStorage.map((todo, i) => {
      return `
      <li class = "todo-item ${todo.done ? 'done' : 'default'}" >
      <input type="checkbox" class = 'checkbox' data-index=${i} ${todo.done ? 'checked' : ''} />
      <label for="todo${i}">${todo.todoText}</label>
      </li>
      `;
    }).join('');

    // refactored - having issues with creating elements
    // todoListContainer.innerHTML = todoStorage.map((todo, i) => {
    //   // create list item and checkbox
    //   const todoLi = document.createElement('li');
    //   todoLi.classList.add('todo-item', 'default');
    //   const checkBox = document.createElement('input');
    //   checkBox.type = 'checkbox';
    //   // preselect checkbox if it is done
    //   if (item.done) checkBox.checked = true;
    //   // set checkbox data-index so label/todo-item can be matched
    //   checkBox.dataset.index = `${i}`;
      
    //   // create label for todo
    //   const todoLabel = document.createElement('label');
    //   todoLabel.setAttribute('for', `item${i}`);
    //   todoLabel.innerHTML = `${item.text}`;
      
    //   // construct todo list item with all elements
    //   todoLi.append(checkBox, todoLabel);
      
    //   // debugger
    //   return todoLi;
    // }).join('');
    
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
    this.populateList(this.todoStorage, this.todoListContainer);
  }

}