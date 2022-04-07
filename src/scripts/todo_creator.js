export default class TodoCreator {
  constructor(todoSection) {
    this.section = this.styleTodoSection(todoSection)
    this.leftCol = this.createLeftCol()
    this.rightCol = this.createRightCol()
    this.attachTodo()
  }

  styleTodoSection(todoSection) {
    todoSection.classList.add('grid-12-col')
    return todoSection
  }

  createLeftCol() {
    const leftCol = document.createElement('div')
    leftCol.classList.add('todo-left')
    this.addContentLeft(leftCol)
    return leftCol
  }

  createRightCol() {
    const rightCol = document.createElement('div')
    rightCol.classList.add('todo-right')
    // create inner container for todo list
    this.createTodoListContainer(rightCol)
    return rightCol
  }

  addContentLeft(leftCol) {
    // create header
    const h2 = document.createElement('h2')
    h2.innerHTML = "Todo"
    // create body text
    const body = document.createElement('p')
    body.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor urna, commodo penatibus porta a dolor. Sed mi consectetur morbi elit senectus egestas ut sed. Id pretium ultricies volutpat massa. Duis eu commodo malesuada enim, viverra in."
    // create button
    const button = document.createElement('a')
    button.classList.add('button')
    button.innerHTML = "Get productive"
    button.href = "#"
    // append all elements to left column, then add to section
    leftCol.append(h2, body, button)
  }

  createTodoListContainer(rightCol) {
    // create container
    const todoListContainer = document.createElement('div')
    todoListContainer.classList.add('todo-list-container')
    // create header
    const todoH4 = document.createElement('h4')
    todoH4.innerHTML = "Todo List"
    todoListContainer.appendChild(todoH4)
    // pass container to createTodo
    this.createTodo(todoListContainer)
    // add to right col
    rightCol.appendChild(todoListContainer)
  }

  // create todo list and form
  createTodo(todoListContainer) {
    // create todo list
    const todoList = document.createElement('ul');
    todoList.classList.add('todo-list');
    // create form
    const todoForm = this.createTodoForm();
    const resetButton = this.createResetButton();
    todoListContainer.append(todoList, todoForm, resetButton);
  }

  // create new todo form with input and button
  createTodoForm() {
    // create form
    const todoForm = document.createElement('form')
    todoForm.classList.add('todo-form')
    // create input field
    const inputTodo = document.createElement('input')
    inputTodo.name = "todo"
    inputTodo.id = "todo-input"
    inputTodo.placeholder = "Add a new Todo"
    inputTodo.required = true
    // create 'create new' button
    const button = document.createElement('input')
    button.classList.add('create-todo')
    button.type = "submit"
    button.value = "+ create new todo"
    // add input and button to form
    todoForm.append(inputTodo, button)
    return todoForm
  }

  createResetButton() {
    const resetButton = document.createElement('a');
    resetButton.innerHTML = "reset"
    resetButton.href = "#"
    resetButton.classList.add('button', 'todo-reset');
    return resetButton;
  }

  attachTodo() {
    this.section.append(this.leftCol, this.rightCol)
  }
}
