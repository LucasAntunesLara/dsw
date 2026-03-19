const express = require('express')
const app = express()
const livrosRoutes = require('./routes/livros')

app.use(express.json())

app.use('/livros', livrosRoutes)

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})
