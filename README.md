# Esse é um Backend da semana Banco Inter Dio

## Introdução

construção de uma API Rest capaz de registrar / logar um usuário.
gerar chave pix e realizar pagamento.
além de carregar dados do usuário e dados transicionais.


Caso venha ser PostgreSQL é preciso criar o dataserve  e passar as configurações do arquivo ormconfig.json
```
{
    "name": "default",
    "type": "postgres",
    "host": "<HOST>",
    "port": 5432,
    "username": "<USER NAME>",
    "password": "<PASSWORD>",
    "database": "<DATABASE>",
    "entities": ["src/entity/*.ts"],
    "logging": false,
    "synchronize": true
 }

```

### Ferramentas Utilizadas:

- [NodeJs](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/)
- [PostGresQL](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com/)
- [JWT](https://jwt.io/) - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
- [Crypto-js](https://www.npmjs.com/package/crypto-js)


### Links Interessantes:

[Como Configurar ESLINT e TYPESCRIPT no NodeJs com Express](https://dev.to/melquisedecfelipe/configurando-eslint-no-node-com-express-e-typescript-58p9)
