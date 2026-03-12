const express = require('express')

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
  res.json({message: 'Bem-vindo à API de Juros Delivery!'})
})

app.get('/delivery/:distancia', (req, res) => {
  const distancia = req.params.distancia

  let tempoEstimado

  if (distancia <= 5) tempoEstimado = 20
  else if (distancia <= 10) tempoEstimado = 40
  else tempoEstimado = 60

  res.json({distancia, tempoEstimado})
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
