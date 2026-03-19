const livroModel = require('../models/livroModel')
exports.listar = (req, res) => {
  livroModel.buscarTodos((err, results) => {
    if (err) return res.status(500).send('Erro ao listar livros')
    res.json(results)
  })
}

exports.listarComEditoras = (req, res) => {
  livroModel.listarComEditoras((err, results) => {
    if (err) {
      console.error('Erro ao buscar livros com editoras:', err)
      return res.status(500).send('Erro ao buscar livros com editoras')
    }
    res.json(results)
  })
}

exports.adicionar = (req, res) => {
  const {titulo, autor, ano_publicacao, editora_id} = req.body
  // Validação dos campos obrigatórios
  if (!titulo || !autor || !ano_publicacao || !editora_id) {
    return res
      .status(400)
      .send(
        'Todos os campos são obrigatórios: título, autor, ano_publicacao e editora_id',
      )
  }
  livroModel.inserir(req.body, err => {
    if (err) {
      console.error('Erro ao adicionar livro:', err)
      return res.status(500).send('Erro ao adicionar livro')
    }
    res.status(201).send('Livro adicionado com sucesso')
  })
}
