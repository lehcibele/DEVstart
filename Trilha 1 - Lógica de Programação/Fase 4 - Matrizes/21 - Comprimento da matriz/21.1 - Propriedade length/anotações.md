# Propriedade .length

- O .length é uma propriedade que retorna o comprimento (número de itens) da matriz.
- O .length não é uma função. Então, o código .length() está errado.

| Tipo de dado | Retorno do .length |
|:---------------:|:--------------------:|
| String        | Quantidade de caracteres |
| Matriz        | Quantidade de itens |


```
let pares = [2, 4, 6, 8, 10]
let impares = [1, 3, 5]

pares.length // 5
impares.length // 3
```

## Exercício - Quantos itens? I
Complete a função quantosItens() de forma que ela retorne o número de itens do parâmetro itens.

Siga a dica a seguir.

### Testes 
- Implemente a função quantosItens().

### Código 

- [Quantos itens? I](./quantosItens1.js)

## Exercício - Quantos itens? II
Complete a função obterMensagem() de forma que ela retorne a seguinte string: "Você tem X itens", onde X é o número de itens do parâmetro itens.

Siga a dica a seguir.

### Testes
- Implemente a função obterMensagem().

### Código

- [Quantos itens? II](./quantosItens2.js)


