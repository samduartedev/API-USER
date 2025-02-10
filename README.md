 # Desafio de API CRUD

# Índice 
* [Descrição do Projeto](#descrição-do-projeto)
* [Tecnologias](#tecnologias)
* [Status](#status)
* [Como Instalar](#como-instalar)
* [Rotas](#rotas)

## Descrição do Projeto
Projeto elaborado para etapa do programa Acelera Jovem da Dataside. O desafio era criar uma API CRUD, composta das seguintes funcionalidades:
- Cadastrar um novo usuário.
- Listar todos os usuários. 
- Listar um usuário.
- Excluir um usuário.
- Atualizar dados de um usuário.
- Persistir os dados em um banco de dados.
  
## Tecnologias

- Node: v22.13.1
- Sqlite
- Javascript
- VS Code

## Status:

:heavy_check_mark: Projeto concluído :heavy_check_mark:

## Como instalar

- Navegar pela pasta do servidor
```
cd SRC
```

- Instalar dependências
```
npm install
```

- Rodar o servidor
```
node SRC\app.js
```

- Conectar os dados no VS code

  * instalar extensão "Database Client JDBC"
  
- Visualizar os dados no VS CODE

  * instalar extensão "MYSQL"

:warning: ATENÇÃO :warning:

* Se for utilizar https, é necessário gerar certificado SSL para funcionar
* Esse código possui cors ativado
  
:arrow_right: você pode comentar as linhas 16 a 19 em "app.js" para não usar https

## Rotas

- GET/users
- GET/user
- POST/user
- PUT/user
- DELETE/user
