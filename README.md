# Teste - Pokemon API

Este Projeto foi desenvolvido como parte de um teste para vaga na empresa [Pagar.me](https://pagar.me/).
O teste foi desenvolvido em node.js v7.9.x (última versão de produção disponível no momento do teste).
Foi usado o ES5 para implementação do código em javascript.
 
## Iniciando servidor
Após clonar o repositório, navegue até a pasta do projeto e execute o comando: ` npm install ` para baixar e instalar as dependências do projeto.
Em seguida, inicie o servidor executando com comando: `npm start`.  O servidor iniciará na porta `3000`.


## APIS
Foram criadas 3 apis.
Foi usado também um gerador de api, no caso usei um modo basico, mas poderia ter evoluído a doc da api a ponto de disponibilzar um teste restfull por ela.
Gerador de api usado foi o [Apidoc](http://apidocjs.com/), para atualizar a doc da api basta executar o comando: ` npm doc `, 
toda a documentação referente a api será gerada na pasta ` public `, e disponibilizado na rota `/` ao executar o servidor.

###	`/create-pokemon` POST 
Api usada para criar um novo pokemon
```json
    {
        "name": "Pikachu",
        "price": 12.5,
        "stock": 20
    }
```
### `/get-pokemons` GET 
Api que retorna os pokemons cadastrados.

```json
    {
        "name": "Pikachu",
        "quantity": 1,
        "card_number": "4024007138010896",
        "card_holder_name": "Ash Ketchum",
        "card_expiration_date": "1050",
        "card_cvv": "123"
    }
```

### `/buy-pokemons` PUT 
Api onde é feita a compra de pokemons.

```json
    {
        "name": "Pikachu",
        "quantity": 1,
        "card_number": "4024007138010896",
        "card_holder_name": "Ash Ketchum",
        "card_expiration_date": "1050",
        "card_cvv": "123"
    }
```

### Testando com MOCHA
Foram implementados alguns testes unitários para testar apenas o endpoint. Não foram cobertos todos os cenários possíveis.
Foi usado para implementação do teste os módulos MOCHA, CHAI, CHAI-HTTP para o teste unitário.
Para executar o teste execute o comando `npm run test`.
