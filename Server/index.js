const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {createList, getList} = require('./controller')

app.post('/addTask', createList)
app.get('/task', getList)

app.listen(4005, () => console.log('Running on port 4005'))