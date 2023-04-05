  <strong> Trybesmith </strong><br />

Projeto de `backend` que consiste em criar uma loja de itens medievais, no formato de uma API, utilizando Typescript, onde será possível realizar a Criação, Leitura, Atualização e Exclusão(CRUD)

Foi desenvolvido utilizando _Docker, NodeJs, Express_ e Arquitetura _MSC_, _MySql_ e _Typescript_.

  <summary><strong>Rodando o projeto localmente‼️ </strong></summary><br />
  
  1. Clone o repositório
   - `git clone git@github.com:AmandaPtela/project-trybesmith.git`
    
  2. Instale as dependências e inicialize o projeto
  - Instale as dependências:
    - `npm install`
  - Inicialize o projeto:
    - `npm run dev` 
  
  <summary><strong>Rodando o projeto no Docker‼️ </strong></summary><br />
  
  1. Clone o repositório
   - `git clone git@github.com:AmandaPtela/project-trybesmith.git`
  
  2. Acesse a raíz do projeto e inicialize/suba o container do projeto - usando o arquivo docker-compose.yml -
   - `docker-compose up -d`
     
  3. Acesse o bash do container
   - `docker exec -it trybesmith bash`
  4. Instale as dependências através do terminal do container:
   - `npm install`
  5. Inicialize o projeto:
   - `npm run dev`
  
*Os arquivos _docker-compose_ e _Trybesmith.sql_ são de autoria da **Trybe**.*