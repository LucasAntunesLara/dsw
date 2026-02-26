// Controlador para listar todos os alunos
function getAlunos(req, res) {
  // Dados simulados de alunos (simula o acesso ao banco de dados)
  const alunos = [
    {
      "id": 1,
      "nome": "João Silva",
      "curso": "Tecnologia em Análise e Desenvolvimento de Sistemas",
      "idade": 22,
    },
    {
      "id": 2,
      "nome": "Maria Souza",
      "curso": "Engenharia de Software",
      "idade": 21,
    },
  ];
  // Define o status de sucesso e envia a lista de alunos como JSON
  res.statusCode = 200;

  res.end(JSON.stringify(alunos));
}
// Controlador para criar um novo aluno
function createAluno(req, res) {
  let body = "";
  // Recebe os dados do corpo da requisição em partes (chunks)
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  // Processa os dados após a recepção completa
  req.on("end", () => {
    try {
      const novoAluno = JSON.parse(body); // Converte o corpo da requisição de JSON para um objeto

      novoAluno.id = Date.now(); // Gera um ID único (em uma aplicação real, o banco de dados geraria o ID)
      // Define o status de criação e envia o aluno criado como resposta
      res.statusCode = 201;

      res.end(JSON.stringify({ message: "Aluno criado", aluno: novoAluno }));
    } catch (error) {
      // Lida com erros de parsing JSON
      res.statusCode = 400;

      res.end(JSON.stringify({ message: "Erro ao processar o aluno" }));
    }
  });
}

// Controlador para atualizar um aluno
function updateAluno(req, res) {
  const id = req.url.split("/")[3]; // Extrai o ID da URL

  let body = "";
  // Recebe os dados do corpo da requisição em partes (chunks)
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  // Processa os dados após a recepção completa
  req.on("end", () => {
    try {
      const alunoAtualizado = JSON.parse(body); // Converte o corpo da requisição de JSON para um objeto

      alunoAtualizado.id = parseInt(id, 10); // Garante que o ID seja um número inteiro
      // Define o status de sucesso e envia o aluno atualizado como resposta
      res.statusCode = 200;

      res.end(
        JSON.stringify({
          message: "Aluno atualizado",
          aluno: alunoAtualizado,
        }),
      );
    } catch (error) {
      // Lida com erros de parsing JSON
      res.statusCode = 400;

      res.end(JSON.stringify({ message: "Erro ao processar o aluno" }));
    }
  });
}
// Controlador para deletar um aluno
function deleteAluno(req, res) {
  const id = req.url.split("/")[3]; // Extrai o ID da URL

  // Define o status de sucesso e envia uma mensagem confirmando a exclusão
  res.statusCode = 200;

  res.end(JSON.stringify({ message: `Aluno com ID ${id} deletado` }));
}

// Exporta os controladores para serem usados em outros módulos
module.exports = {
  getAlunos,
  createAluno,
  updateAluno,
  deleteAluno,
};
