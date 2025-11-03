# Soma dentro de função

```
function calculaSoma(itens) {
    let soma = 0
    itens.forEach(function(item) {
        soma = soma + item
    })
    return soma
}

calculaSoma([10, 20, 30]) // 60
calculaSoma([5, 2]) // 7
calculaSoma([]) //0
```

## Exercício - Calcular total
Complete a função calcularTotal() de forma que ela calcule a soma dos itens da matriz numeros que ela recebe como parâmetro.

Siga as instruções acima.

### Testes
- A função calcularTotal() deve retornar a soma dos números recebidos como parâmetro.

### Código

- [Calcular total](./calcularTotal.js)