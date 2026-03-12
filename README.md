# 🌐 Desenvolvimento de Serviços Web

Repositório da disciplina **Desenvolvimento de Serviços Web** - 3º Semestre do Curso de **Análise e Desenvolvimento de Sistemas** do **IFRS _Campus_ Bento Gonçalves**.

## 📋 Descrição

Este repositório contém exemplos práticos e exercícios realizados durante a disciplina de Desenvolvimento de Serviços Web. O foco é explorar diferentes conceitos e tecnologias para criar serviços web robustos e escaláveis, desde o entendimento básico de servidores HTTP até o uso de frameworks modernos como Express.js.

Os projetos demonstram desde a construção de servidores HTTP nativos com Node.js até a implementação de APIs RESTful com arquitetura em camadas (Controllers, Routes, Models).

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript para executar código no servidor
- **HTTP Nativa** - Servidores HTTP usando o módulo nativo do Node.js
- **Express.js** - Framework minimalista e flexível para Node.js
- **RESTful API** - Padrão arquitetural para serviços web
- **Nodemon** - Ferramenta para desenvolvimento com recarga automática
- **REST Client** - Testes de endpoints via arquivos `.rest`

## 📁 Estrutura do Repositório

```
dsw/
├── aula0X/                          # Aula específica
│   ├── proj1/                       # Projeto 1 da aula 0X
│   ├── proj2/                       # Projeto 2 da aula 0X
├── aula0XX/                        
│   ├── delivery/                    # Projeto 1 da aula 0XX
│   ├── imc/                         # Projeto 2 da aula 0XX
│   └── node-express/                # Projeto 3 da aula 0XX
├── outras aulas.../       
│
└── README.md
```

## 🚀 Como Rodar os Projetos

### Pré-requisitos

- **Node.js** (versão 14 ou superior) - [Download](https://nodejs.org/)
- **npm** (gerenciador de pacotes do Node.js) - Geralmente vem com Node.js

### Instalação e Execução

1. **Clone ou baixe o repositório:**

   ```bash
   git clone https://github.com/LucasAntunesLara/dsw.git
   cd dsw
   ```

2. **Navegue até o projeto desejado:**

   ```bash
   cd aula2/servidor-http
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Execute o servidor em modo desenvolvimento:**

   ```bash
   npm run dev
   ```

   Ou execute diretamente:

   ```bash
   node server.js
   ```

5. **O servidor estará disponível em:**
   ```
   http://localhost:3000
   ```

### Testando os Endpoints

Cada projeto contém um arquivo `testes.rest` com exemplos de requisições. Use uma extensão como **REST Client** (VS Code) para testar os endpoints.


## 💡 Exemplos de Uso

### Iniciando um servidor HTTP nativo:

```javascript
const http = require('http')
const PORT = 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify({mensagem: 'Olá, Mundo!'}))
})

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
```

### Usando Express:

```javascript
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({mensagem: 'Olá do Express!'})
})

app.listen(3000, () => {
  console.log('Servidor Express rodando na porta 3000')
})
```

## 📖 Scripts Disponíveis

A maioria dos projetos inclui os seguintes scripts no `package.json`:

- `npm start` - Inicia o servidor (quando disponível)
- `npm run dev` - Inicia o servidor em modo desenvolvimento com Nodemon

## 📝 Notas

- Para alterar a porta padrão (3000), edite a variável `PORT` nos respectivos arquivos `server.js`
- Certifique-se de que a porta 3000 não está em uso por outro processo antes de executar
- Use a extensão **REST Client** no VS Code para testar os endpoints de forma prática