<></>
<h1>🍔 Food Delivery App</h1>

<p>Uma aplicação fullstack de delivery de comida construída com React + Node.js e executada em containers Docker.</p>
<ul>
   <li>O projeto utiliza:</li>
   <li>React + Vite no frontend</li>
   <li>Node.js no backend</li>
   <li>pnpm como gerenciador de pacotes</li>
   <li>Docker Compose para orquestrar os serviços</li>
   <li>O Vite atua como proxy, permitindo que o frontend acesse o backend sem problemas de CORS.</li>
</ul>

<h2>📸 Preview da aplicação</h2>
<p align="center">
  <img src="screenshots/img1.png" width="400">
</p>

<h2>🧱 Arquitetura da aplicação</h2>
<p align="center">
                    ┌───────────────────────┐</br>
                    │       Browser         │</br>
                    │   http://app_ip       │</br>
                    └───────────┬───────────┘</br>
                                │</br>
                                │</br>
                                ▼</br>
                     ┌────────────────────┐</br>
                     │  Frontend (React)  │</br>
                     │   Vite Dev Server  │</br>
                     │      Port 3000     │</br>
                     └─────────┬──────────┘</br>
                               │</br>
                               |</br>
                               │</br>
                               ▼</br>
                     ┌────────────────────┐</br>
                     │   Backend (Node)   │</br>
                     │       API          │</br>
                     │      Port 3001     │</br>
                     └────────────────────┘</br>
</p>
<h2>🐳 Containers</h2>
<p>A aplicação roda em dois containers separados:</p>


<p><b>Container	Tecnologia	Porta</b></p>
<p>frontend	React + Vite + pnpm	3000</p>
<p>backend	Node.js + pnpm	3001</p>
<h2>📁 Estrutura do projeto</h2>

food-delivery-app</br>
│</br>
├── backend</br>
│   ├── src</br>
│   ├── package.json</br>
│   └── Dockerfile</br>
│</br>
├── frontend</br>
│   ├── src</br>
│   ├── vite.config.js</br>
│   ├── package.json</br>
│   └── Dockerfile</br>
│</br>
├── docker-compose.yml</br>
│</br>
└── README.md</br>



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