const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.json({message: 'Bem-vindo à API de IMC!'})
})

// Exemplo: /imc?peso=70&altura=1.75
app.get('/imc', (req, res) => {
  const {peso} = req.query

  if (peso) {
    const {altura, peso} = req.query

    const imc = (Number(peso) / (Number(altura) * Number(altura))).toFixed(2)

    let classificacao

    if (imc < 18.5) classificacao = 'Magreza'
    else if (imc < 25) classificacao = 'Normal'
    else if (imc < 30) classificacao = 'Sobrepeso'
    else classificacao = 'Obesidade'

    res.json({
      peso: peso,
      altura: altura,
      imc: imc,
      classificacao: classificacao,
    })
  }
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
