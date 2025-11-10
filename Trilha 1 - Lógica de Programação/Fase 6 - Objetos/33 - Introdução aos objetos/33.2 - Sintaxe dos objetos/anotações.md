# Sintaxe dos objetos

- Para criar um objeto vázio, basta defini-lo com {}.
- É recomendável escrever o objeto em várias linhas, para melhorar a legibilidade e facilitar a adição de pares de chave/valor no futuro.
- Em objetos com mais de um par chave/valor, é obrigatório inserir vírgulas separando os pares.

## Criando um objeto vázio

```
let pessoa = {};
lett configuracoes = {};
```

## Objeto com um par de chave e valor

```
let configuracoes = {
    unidadeDeMedida: "cm"
}
```

## Exercício - Objeto recebido por parâmetro no console
Complete a função objetoNoLog(), de forma que ela exiba no console o objeto que recebe como parâmetro.

Confira como o objeto aparece no console, para se familiarizar com os objetos.

Faça com que a função execute o console.log do objeto recebido.

### Testes
- Implemente objetoNoLog().

### Código

- [Objeto recebido por parâmetro no console](./objetoRecebidoPorParametro.js)

## Exercício - Primeiro objeto e suas propriedades
Crie um objeto restaurante com as seguintes informações:

nome: escreva qualquer nome de que você gostar.
classificacao: atribua qualquer classificação entre 1 e 5.
abertoNasSegundas: atribua um valor booleano para indicar se o restaurante abre ou não às segundas-feiras.
Sinta-se à vontade para incluir um console.log desse objeto no final, para que você possa visualizá-lo.

O objeto restaurante deve conter as variáveis nome, classificacao e abertoNasSegundas.

### Testes
- Defina o objeto restaurante.

### Código

- [Primeiro objeto e suas propriedades](./primeiroObjetoSuasPropriedades.js)
