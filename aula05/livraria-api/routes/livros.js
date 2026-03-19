const express = require('express')
const router = express.Router()
const livroController = require('../controllers/livroController')

router.get('/', livroController.listar)

router.post('/', livroController.adicionar)

router.get('/completo', livroController.listarComEditoras)

module.exports = router

exports.listarComEditoras = callback => {
  const sql = `
 SELECT livros.*, editoras.nome AS editora
 FROM livros
 JOIN editoras ON livros.editora_id = editoras.id
 `
  connection.query(sql, callback)
}
