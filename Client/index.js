const baseURL = 'http://localhost:4005'

const addTodo = document.querySelector('#add-todo')
const showTodo = document.querySelector('#show-todo')
const enterInput = document.querySelector('#todo-input')
const deleteAllBtn = document.querySelector('#delete-all')

const showTime = () => {
    const date = new Date()
    document.querySelector('#date-time').innerHTML= date.toLocaleDateString()
}

const strikeThrough = () => {
    const todoStrike = document.querySelector('h3')
    todoStrike.style.textDecorationLine = "line-through"
}

const createTodoContainer = (task) => {
    const newTodo = document.createElement('section')
    newTodo.classList.add('todo-container')
    newTodo.innerHTML = `
            <input class="check" type="checkbox"/>
            <h3>${task.todo}</h3>
            <button class="delete" onclick="deleteTodo(${task.id})">Delete</button>
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
    showTodo.textContent = ''
    const todo = document.querySelector('#todo-input')
    let body = {
        todo: todo.value
    }

    axios.post(`${baseURL}/addTodo`, body)
    .then(res => showTodos(res.data))
    .catch(err => console.error(err))

    todo.value = ''
}


const updateTodo = (id, input) => {
    axios.put(`${baseURL}/updateTodo/${id}`)
    .then(res => {
        showTodo.innerHTML = input.value
        updateTodo(res.data)
    })
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
enterInput.addEventListener('keypress', addNewTodo => {
    if (addNewTodo.key === "Enter") {
        document.querySelector('#add-todo').click()
    }
})
    
getAllTodos()
showTime()