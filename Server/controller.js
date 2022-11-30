const task = require('./db.json')
let globalId = 4

module.exports = {

    createTask: (req, res) => {
        const {task} = req.body

        const newTask = {
            id: globalId,
            task
        }

        task.push(newTask)

        globalId++

        res.status(200).send(task)
    },

    getTask: (req, res) => {
        res.status(200).send(task)
    }

}