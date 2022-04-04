class TodoFunctionality {
  constructor(todoListContainer, todoForm, todoItemsStorage) {
    this.todoListContainer = todoListContainer // ul
    this.todoForm = todoForm // form
    this.todoItemsStorage = JSON.parse(localStorage.getItem('todo-items')) || []
    // add event listener on submit button
    this.todoForm.addEventListener('submit', this.addNewTodo)
    // add event listener on list items - toggle done
    this.todoListContainer.addEventListener('click', this.toggleDone)
    this.populateList(this.todoItemsStorage, this.todoListContainer)
  }

  addNewTodo(e) {
    e.preventDefault()
    const todoText = document.querySelector('[name=todo]').value
    const todoObj = {
      todoText,
      done: false
    }
    // add todo to our todoItemsStorage array and populate list of todo's
    this.todoItemsStorage.push(todoObj)
    populateList(this.todoItemsStorage, this.todoListContainer)
    // save in user's local storage
    localStorage.setItem('todo-items', JSON.stringify(this.todoItemsStorage))
    // reset event listener 
    e.currentTarget.reset()
  }

  // update user's list of todos rendered on the browser
  populateList(todoItemsStorage = [], todoListContainer) {
    // iterate through all todo items and map to todoListContainer
    todoListContainer.innerHTML = todoItemsStorage.map((item, i) => {
      // create list item and checkbox
      const todoLi = document.createElement('li')
      todoLi.classList.add('todo-item', 'default')
      const checkBox = document.createElement('input')
      checkBox.type = 'checkbox'
      // preselect checkbox if it is done
      if (item.done) checkBox.checked = true
      // set checkbox data-index so label/todo-item can be matched
      checkBox.dataset.index = `${i}`
      
      // create label for todo
      const todoLabel = document.createElement('label')
      todoLabel.setAttribute('for', `item${i}`)
      todoLabel.innerHTML = `${item.text}`
      
      // construct todo list item with all elements
      todoLi.append(checkBox, todoLabel)
      
      // debugger
      return todoLi
    }).join('')
    
  }

  toggleDone(e) {
    // ensure click is on the checkbox, othersise skip
    if (!e.target.matches('input')) return;
    const todo = e.target
    // find index to match checkbox with the todo item
    const index = todo.dataset.index
    this.todoItemsStorage[index].done = !this.todoItemsStorage[index].done // flip status
    // save todo to storage, render on DOM
    localStorage.setItem('todo-items', JSON.stringify(this.todoItemsStorage))
    this.populateList(this.todoItemsStorage, this.todoListContainer)
  }

}

export default TodoFunctionality