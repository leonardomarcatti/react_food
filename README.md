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
  <img src="screenshots/img2.png" width="400">
  <img src="screenshots/img3.png" width="400">
  <img src="screenshots/img4.png" width="400">
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


<h2>🚀 Como executar o projeto</h2>
<ul>
   <li>Clonar o repositório => https://github.com/leonardomarcatti/react_food.git</li>
   <li>Dentro da pasta rais => docker compose up --build</li>
</ul>

<h2>🌐 Acessando a aplicação</h2>
<p>Frontend: http://ip:3000</p>
<p>Backend API: http://meals:3001</p>

<h2>🍕 Funcionalidades</h2>
<p>📋 Listagem de comidas</p>
<p>🛒 Carrinho de compras</p>
<p>📦 Envio de pedidos</p>
<p>🔄 Comunicação com API</p>
<p>⚡ Proxy automático via Vite</p>

<h2>📦 Gerenciamento de pacotes</h2>
<p>Este projeto utiliza pnpm.</p>
<p>Caso queira rodar localmente sem Docker:</p>


<h2>📚 Tecnologias utilizadas</h2>
<ol>
   <li>
      <b>Frontend</b>
      <ul>
         <li>⚛️ React</li>
         <li>⚡ Vite</li>
         <li>🟨 JavaScript</li>
         <li>📦 pnpm</li>
      </ul>
   </li>

   <li>
      <b>Backend</b>
      <ul>
         <li>🟢 Node.js</li>
         <li>🚂 Express</li>
         <li>📦 pnpm</li>
         <li>⚙️ DevOps</li>
         <li>🐳 Docker</li>
         <li>🐙 Docker Compose</li>
      </ul>
   </li>
</ol>

<h2>📄 Licença</h2>
<p>Este projeto está licenciado sob a licença MIT.</p>