# Explicação
O projeto agora conta com o dotenv, isso significa que o backend consegue ter acesso nas variaveis de ambiente.
A forma correta é nunca deixar dados sensíveis no código, como por exemplo o acesso ao banco de dados,
para isso é utilizado variaveis de ambiente. No projeto é possível ver um arquivo chamado: **env-example**,
ele tem o exemplo de como deve ser preenchido.

# Criando a variavel de ambiente
Basta criar um arquivo na raiz do projeto com o nome **.env** e passar as infos necessárias, como por exemplo:

```
# Database connection
databaseHost = XXX.XXX.XXX.XXX
databaseUsername = johndoe
databasePassword = johndoe123456
databaseDB = public
```

Após a criação, só executar o projeto normalmente e o mesmo conseguirá acessar essas infos.
## Lembrando que o .env nunca sobe no repositório!