const express = require('express')
const router = express.Router()
const connection = require('../config/db')
// Rota para listar todos os receitas (READ)
router.get('/', (req, res) => {
  connection.query('SELECT * FROM receitas', (err, results) => {
    if (err) {
      res.status(500).send('Erro ao buscar receitas')
      console.error('Erro:', err)
      return
    }
    res.json(results)
  })
})

//Rota para buscar a receita pelo ID
// Rota para buscar uma receita específica pelo ID
router.get('/:id', (req, res) => {
  const {id} = req.params

  connection.query(
    'SELECT * FROM receitas WHERE id = ?',
    [id],
    (err, results) => {
      if (err) {
        res.status(500).send('Erro ao buscar receita')
        console.error('Erro:', err)
        return
      }

      // Verifica se a receita foi encontrada
      if (results.length === 0) {
        res.status(404).send('Receita não encontrada')
        return
      }

      // Retorna a primeira receita encontrada (como é por ID, será apenas uma)
      res.json(results[0])
    },
  )
})

// Rota para adicionar uma nova receita (CREATE)
router.post('/', (req, res) => {
  const {
    nome,
    descricao,
    ingredientes,
    modo_preparo,
    tempo_preparo,
    dificuldade,
  } = req.body

  const sql =
    'INSERT INTO receitas (nome, descricao, ingredientes, modo_preparo, tempo_preparo, dificuldade) VALUES (?, ?, ?, ?, ?, ?)'

  connection.query(
    sql,
    [nome, descricao, ingredientes, modo_preparo, tempo_preparo, dificuldade],
    (err, results) => {
      if (err) {
        res.status(500).send('Erro ao inserir receita')
        console.error('Erro:', err)
        return
      }
      res.status(201).send('Receita inserida com sucesso')
    },
  )
})
// Rota para atualizar uma receita (UPDATE)
router.put('/:id', (req, res) => {
  const {id} = req.params
  const {
    nome,
    descricao,
    ingredientes,
    modo_preparo,
    tempo_preparo,
    dificuldade,
  } = req.body
  // const sql = 'UPDATE receitas SET nome = ?, idade = ? WHERE id = ?'
  const sql =
    'UPDATE receitas SET nome = ? ,descricao = ? ,ingredientes = ? ,modo_preparo = ? ,tempo_preparo = ? , dificuldade = ? WHERE id = ?'
  connection.query(
    sql,
    [
      nome,
      descricao,
      ingredientes,
      modo_preparo,
      tempo_preparo,
      dificuldade,
      id,
    ],
    (err, results) => {
      if (err) {
        res.status(500).send('Erro ao atualizar receita')
        console.error('Erro:', err)
        return
      }
      if (results.affectedRows === 0) {
        res.status(404).send('Receita não encontrada')
      } else {
        res.send('Receita atualizada com sucesso')
      }
    },
  )
})
// Rota para deletar uma receita (DELETE)
router.delete('/:id', (req, res) => {
  const {id} = req.params
  const sql = 'DELETE FROM receitas WHERE id = ?'
  connection.query(sql, [id], (err, results) => {
    if (err) {
      res.status(500).send('Erro ao deletar receita')
      console.error('Erro:', err)
      return
    }
    if (results.affectedRows === 0) {
      res.status(404).send('Receita não encontrada')
    } else {
      res.send('Eeceita deletada com sucesso')
    }
  })
})
module.exports = router
