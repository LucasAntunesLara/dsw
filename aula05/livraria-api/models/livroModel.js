const connection = require('../config/db')
exports.buscarTodos = callback => {
  connection.query('SELECT * FROM livros', callback)
}
exports.inserir = (dados, callback) => {
  const {titulo, autor, ano_publicacao} = dados

  const sql =
    'INSERT INTO livros (titulo, autor, ano_publicacao) VALUES (?, ?,?)'

  connection.query(sql, [titulo, autor, ano_publicacao], callback)
}
