const {
  getAlunos,
  createAluno,
  updateAluno,
  deleteAluno,
} = require("./controllers/alunosController");
function handleRequest(req, res) {
  res.setHeader("Content-Type", "application/json");
  const routeKey = `${req.method} ${req.url}`;
  switch (true) {
    case routeKey === "GET /api/alunos":
      getAlunos(req, res); // Listar alunos

      break;
    case routeKey === "POST /api/alunos":
      createAluno(req, res); // Criar aluno

      break;
    case req.url.startsWith("/api/alunos/") && req.method === "PUT":
      updateAluno(req, res); // Atualizar aluno

      break;
    case req.url.startsWith("/api/alunos/") && req.method === "DELETE":
      deleteAluno(req, res); // Deletar aluno

      break;
    default:
      res.statusCode = 404;

      res.end(JSON.stringify({ message: "Rota não encontrada" })); // Responde com 404 para rotas não encontradas

      break;
  }
}
module.exports = { handleRequest };
