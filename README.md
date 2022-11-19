# dom-pixel-teste-jlgozzi

![logo](https://user-images.githubusercontent.com/48017110/202856866-546bd4a8-373f-47b7-a5e6-282fdd463cdf.png)


<h2>Introdução</h2>

A aplicação se trata de uma interface única onde o usuário pode visualizar os produtos cadastrados e também editar ou excluir produtos existentes.

<h2>Tecnologias usadas no projeto</h2>

 <h4> BACK</h4>
 <ul>
    <li>Node.js + Typescript</li>
    <li>Express</li>
    <li>Express-async-erros</li>
    <li>Typeorm</li></li>
    <li>dotenv</li>
    <li>pg</li>
    <li>Cors</li>
    <li>uuid</li>
   </ul></li>
    
   <h4>FRONT</h4>
   <ul>
      <li>React + Typescript</li>
      <li>styled-components</li>
      <li>react-icons</li>
      <li>react-toastfy</li>
      <li>axios</li>
      <li>yup</li>
      <li>@hookform/resolvers</li>
      <li>react-context</li>
    </ul>

<h2>Instalação</h2>


  Primeiramente, clone o repositório em sua máquina local.
  
  Em cada repositório, execute o comando yarn install para instalar as depencências do projeto.
  
  Crie um banco de dados PostgreSQL para ser armazenado a tabela de produtos
  
  <h4> BACK</h4>
  <ol>
  <li>Criar um arquivo .env seguindo o padrão do .env.example e insira as informaçãoes referentes ao banco de dados criado e uma api_key, podendo ser uma número qualquer.</li>
  <li>Após instalado as dependências, usar o comando "yarn migration:run -d src/data-source" para gerar uma tabela em seu banco de dados local</li>
  <li>utilizar o comando "yarn dev" para inicializar a database.</li>
  <li>caso em seu terminal apareça a mensagem "Data-source initialized", a api vai estará funcionando localmente através da porta "localhost:3000"</li>
  <li>caso apresente algum erro de inicialização certifique-se de ter instalado todas as dependências corretamente.</li>
  </ol>


   <h4>FRONT</h4>
   <ol>
  <li>Entre no diretorio src/services/api.ts e adicione aos headers a MESMA chave registrada no .env do diretório back.</li>
    EX: headers: {api_key.1234}
  <li>Execute o comando yarn start para iniciar a aplicação no browser.</li>
  </ol>
  
  
  Feito todos os passos sua aplicação deve estar rodando normalmente.
  

<h3>Notas</h3>
<details>
<summary>Dificuldades</summary>
  No geral acredito que o ponto que mais me senti "perdido" foi referente a chave api, nunca havia utlizado algo do tipo, portanto fiz um middleware para validação de uma chave registrada no arquivo .env, tendo em mente que essa chave seria desconhecida para o usuário no front.
    Gostaria de ter realizado alguns testes unitários no back também, mas infelizmente não tive o tempo necessário.
 </details>

<h3>Contato</h3>
  <p>Caso tenha problemas durante a instalação ou feedbacks, pode me contatar via:</br>
  Email: <a href="Gozzi.dev@gmail.com">Gozzi.dev@Gmail.com</a>.</p>
