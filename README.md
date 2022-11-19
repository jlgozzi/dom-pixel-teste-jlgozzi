# dom-pixel-teste-jlgozzi

A aplicação se trata de uma interface única onde o usuário pode visualizar os produtos cadastrados e também editar ou excluir produtos existentes.


Instruções de inicialização ():
- Realizar o clone do repositório em sua máquina local
- Abrir o diretório back e no terminal, usar o comando 'yarn install' para instalar as dependências necessárias para o projeto
- criar um arquivo .env seguindo o padrão do .env.example
- Após instalado as dependências, usar o comando "yarn migration:run -d src/data-source" para gerar uma tabela em seu banco de dados local
- utilizar o comando "yarn dev" para inicializar a database.
- Com a database inicializada, é necessário abrir o diretório front e reutilizar o comando "yarn install" para instalar as dependências do front.
- Entre no diretorio src/services/api.ts e adiciona aos headers a mesma chave registrada no .env do diretório back.
  Ex: //headers: {api_key.1234}
- Caso todas sejam instaladas corretamente, apenas é nessessário rodar o comando "yarn start" para a aplicação ser executada.

#Dificuldades
  No geral acredito que o ponto que mais me senti "perdido" ffoi referente a chave api, nunca havia utlizado algo do tipo, portanto fiz um middleware para validação de uma chave registrada no arquivo .env, tendo em mente que essa chave seria desconhecida para o usuário no front.
    Gostaria de ter realizado alguns testes unitários no back também, mas infelizmente não tive o tempo necessário.
