🍔 Food Delivery App












Uma aplicação fullstack de delivery de comida construída com React + Node.js e executada em containers Docker.

O projeto utiliza:

React + Vite no frontend

Node.js no backend

pnpm como gerenciador de pacotes

Docker Compose para orquestrar os serviços

O Vite atua como proxy, permitindo que o frontend acesse o backend sem problemas de CORS.

📸 Preview da aplicação

(Adicione screenshots aqui quando quiser)

screenshots/app.png

Exemplo:

![App Screenshot](screenshots/app.png)
🧱 Arquitetura da aplicação
                    ┌───────────────────────┐
                    │       Browser         │
                    │   http://localhost    │
                    └───────────┬───────────┘
                                │
                                │
                                ▼
                     ┌────────────────────┐
                     │  Frontend (React)  │
                     │   Vite Dev Server  │
                     │      Port 3000     │
                     └─────────┬──────────┘
                               │
                     Vite Proxy│
                               │
                               ▼
                     ┌────────────────────┐
                     │   Backend (Node)   │
                     │       API          │
                     │      Port 3001     │
                     └────────────────────┘
🐳 Containers

A aplicação roda em dois containers separados:

Container	Tecnologia	Porta
frontend	React + Vite + pnpm	3000
backend	Node.js + pnpm	3001
📁 Estrutura do projeto
food-delivery-app
│
├── backend
│   ├── src
│   ├── package.json
│   └── Dockerfile
│
├── frontend
│   ├── src
│   ├── vite.config.js
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
│
└── README.md
⚙️ Configuração do Proxy no Vite

O Vite redireciona requisições para o backend.

Exemplo de configuração:

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://backend:3001",
        changeOrigin: true
      }
    }
  }
})

Assim o frontend pode fazer chamadas como:

fetch("/api/meals")

Sem precisar usar a URL completa da API.

🚀 Como executar o projeto
1️⃣ Clonar o repositório
git clone https://github.com/seu-usuario/food-delivery-app.git

Entre na pasta do projeto:

cd food-delivery-app
🐳 Executando com Docker

Na raiz do projeto, execute:

docker compose up --build

Docker irá:

construir os containers

instalar dependências com pnpm

iniciar frontend e backend

🌐 Acessando a aplicação

Frontend:

http://localhost:3000

Backend API:

http://localhost:3001
🍕 Funcionalidades

📋 Listagem de comidas

🛒 Carrinho de compras

📦 Envio de pedidos

🔄 Comunicação com API

⚡ Proxy automático via Vite

📦 Gerenciamento de pacotes

Este projeto utiliza pnpm.

Caso queira rodar localmente sem Docker:

Instalar pnpm:

npm install -g pnpm
🛠 Rodando sem Docker
Frontend

Entre na pasta:

cd frontend

Instale dependências:

pnpm install

Execute:

pnpm dev
Backend

Entre na pasta:

cd backend

Instale dependências:

pnpm install

Execute:

pnpm start
📚 Tecnologias utilizadas

Frontend

React

Vite

JavaScript

pnpm

Backend

Node.js

Express

pnpm

DevOps

Docker

Docker Compose

📄 Licença

Este projeto está licenciado sob a licença MIT.