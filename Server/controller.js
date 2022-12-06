const todos = require('./db.json')
let globalId = 4

module.exports = {

    createTodo: (req, res) => {
        const {todo} = req.body

        const newTodo = {
            id: globalId,
            todo
        }

        todos.push(newTodo)

        globalId++

        res.status(200).send(todos)
    },

    getTodo: (req, res) => {
        res.status(200).send(todos)
    },

    updateTodo: (req, res) => {
        const i = todos.findIndex(el => el.id === +req.params.id)
        const {edit} = req.body

        let 
    },

    deleteTodo: (req, res) => {
        const i = todos.findIndex(el => el.id === +req.params.id)
        todos.splice(i, 1)
        res.status(200).send(todos)
    }

}