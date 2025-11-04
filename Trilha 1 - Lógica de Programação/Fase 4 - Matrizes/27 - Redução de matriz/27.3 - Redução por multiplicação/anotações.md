# Redução por multiplicação

- Na redução de matriz por multiplicação, usamos o valor inicial igual a 1.

```
let numeros = [5, 2, 10]

let resultado = numeros.reduce(function(total, atual) {
    return total * atual
}, 1)

console.log(resultado) // 100
```

## Exercicio - Multiplicar números
Complete a função multipliqueNumeros() de forma que ela multiplique cada número da matriz que recebe como parâmetro.

Implemente a instrução acima com um reduce.

### Testes
Implemente a função multipliqueNumeros(). 

### Código

- [Multiplicar números](./multiplicarNumeros.js)