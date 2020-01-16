const express = require('express')
const mongoose = require('mongoose')
const router = require('./router')
const cors = require('cors')

const port = 3333
const app = express()

mongoose.connect('mongodb://localhost:27017/week10', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => console.log(`o servidor está rodando na porta ${port}`))
