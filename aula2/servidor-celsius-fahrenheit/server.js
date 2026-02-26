const http = require("http");
const url = require("url");
const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === "/") {
    let celsius = parsedUrl.query.celsius;

    if (isNaN(celsius)) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ erro: "Parâmetro inválido" }));
      return;
    }

    const fahrenheit = (celsius * 9) / 5 + 32;

    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(
      JSON.stringify({
        resultado: `Celsius: ${celsius}, Fahrenheit: ${fahrenheit}`,
      }),
    );
    return;
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Rota não encontrada");
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
