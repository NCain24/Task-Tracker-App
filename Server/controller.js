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
    }

}