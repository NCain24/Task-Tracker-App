const baseURL = 'http://localhost:4005'

const addTodo = document.querySelector('#add-todo')
const showTodo = document.querySelector('#show-todo')

const createTodoContainer = (task) => {
    const newTodo = document.createElement('section')
    newTodo.classList.add('todo-container')
    newTodo.innerHTML = `
        <h3>${task.todo}</h3>
        <button onclick="deleteTodo(${task.id})">Delete</button>
    `

    showTodo.appendChild(newTodo)
}

const showTodos = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        createTodoContainer(arr[i])
    }
}

const getAllTodos = () => {
    axios.get(`${baseURL}/todos`)
    .then(res => showTodos(res.data))
    .catch((err) => console.error(err))
}

const addNewTodo = () => {
    showTodo.innerHTML = ''
    const todo = document.querySelector('#todo-input')
    let body = {
        todo: todo.value
    }

    axios.post(`${baseURL}/addTodo`, body)
    .then(res => showTodos(res.data))
    .catch(err => console.error(err))
}

const updateTodo = (id, done) => {

}

const deleteTodo = (id) => {
    axios.delete(`${baseURL}/deleteTodo/${id}`)
    .then(res => {
        showTodo.innerHTML = ''
        showTodos(res.data)
    })
    .catch(err => console.error(err))
}

addTodo.addEventListener('click', addNewTodo)
getAllTodos()