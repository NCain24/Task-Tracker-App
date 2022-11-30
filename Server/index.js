const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.static(`${__dirname}/client`))

app.use(express.json())
app.use(cors())

const {createTodo, getTodo} = require('./controller')

app.post('/addTodo', createTodo)
app.get('/todos', getTodo)

app.listen(4005, () => console.log('Running on port 4005'))