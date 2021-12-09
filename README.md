
Caso venha ser Postgre é preciso criar o dataserve  e passar as configurações do arquivo ormconfig.json
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
