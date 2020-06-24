# SOBRE O PROJETO

<body>
    <ul>
        <h2>🍔 PROJETO FOODFY 🍕</h2>
        <li> 
        <p>Foodfy é um projeto realizado durante o <strong>Bootcamp</strong> da <strong>Rocketseat.🚀</strong></p>
        </li>
        <li>
        <p>Um projeto voltado à culinária (um site de receitas, com gerenciamento de usuários), baseado em tecnologias que foram consumidas durante todo o BootCamp.</p>
        </li>
    </ul>
</body>
<br>

![telainicial](https://user-images.githubusercontent.com/51519268/85497112-ce1cf880-b5b3-11ea-84d9-ff2775fd219a.png)

## ⌨️ Tecnologias

### Utilizadas no Backend:

> [NodeJS]

> [PostgresSQL]

> [Express]

### Frontend:

> [Nunjucks] Template Engine

> JavaScript

> HTML

> CSS3

<br>

## 💻 Como Utilizar:

1. Baixe o projeto com:

   - `git clone()`

   ou

   - Baixe o projeto como _zip_.

2. Execute `npm install` no terminal para instalar as dependências deste projeto.

3. Configure o Banco de dados para acesso (utilizando o Postgres), no arquivo **src/config/db.js**

4. Caso não tenha criado o banco foodfy, execute os comandos presente no arquivo **foodfy.sql**.

5. Após configurar o arquivo db.js e criar o banco, execute o arquivo seed.js (`node seed.js`) para popular alguns dados e testar a aplicação.

6. Execute `npm start` para iniciar a aplicação. Abra o navegador em (**http://localhost:5000/**)

7. Para utlizar o serviço de email, configure o [mailtrap] no arquivo **src/lib/mailer.js**, colocando suas credenciais.

8. Todas as senhas do seed.js são padronizadas **('123')**, pegue um email da tabela users e utilize um `user` na rota de login (`/users/login`).

9. É uma boa prática reiniciar o serviço seed.js (Limpar dados da tabela) para evitar possíveis falhas. Para a limpeza de dados, seguir as instruções ao final do arquivo foodfy.sql (`--restart to run seed.js`).

<!-- links tencologias -->

[express]: https://expressjs.com/
[nodejs]: https://nodejs.org/en/
[postgressql]: https://www.postgresql.org/
[nunjucks]: https://mozilla.github.io/nunjucks/
[mailtrap]: https://mailtrap.io/
