# Função sem retorno

- Se esquecer de inserir a palavra-chave **return** dentro de uma função, ela vai retornar um valor indefinido. Isso é chamado de **retorno implícito**.


```
function quantidadeDeLetras(nome) {
    nome.length
}

quantidadeDeLetras("Fabiano") // undefined
```

- Quando não é colocado o retorno da função o javaScript adiciona um retorno implicito undefined

```
function quantidadeDeLetras(nome) {
    nome.length
    return undefined // retorno implicito adicionado pelo javascript
}

quantidadeDeLetras("Fabiano") // undefined
```

## Exercicio - Função sem retorno

Temos aqui uma função chamada quantidadeDeLetras(), mas nela está faltando um retorno.

Execute os testes e veja que a função vai retornar undefined. Isso acontece porque está faltando a palavra-chave return.

Então, corrija a função de forma que ela retorne a quantidade de letras corretamente, de acordo com o nome dado ao chamar a função.

Corrija a função quantidadeDeLetras().

### Testes
- Ao chamar a função quantidadeDeLetras() com o nome "César", a função deve retornar o tamanho 5.
- Ao chamar a função quantidadeDeLetras() com o nome "Jéssica", a função deve retornar o tamanho 7.

### Código

- [Função sem retorno](./funcaoSemRetorno.js)