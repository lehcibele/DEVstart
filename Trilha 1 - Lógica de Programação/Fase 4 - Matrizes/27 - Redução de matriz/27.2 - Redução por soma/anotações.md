# Redução por soma

- O método **.reduce()** recebe dois parâmetros: 
    - O *redutor* e o *valor inicial*.
- Para a redução por soma, o *valor inicial* é sempre zero.
- O *redutor* é uma função callback que recebe dois argumentos: 
    - *total* e *atual*.
- A variável *total (acumulador)* é atualizada a cada passo da redução. Na redução por soma, ela contém a soma acumulada dos itens antteriores da matriz, mais o item atual.
- A variável *atual* representa um item da matriz.
- O redutor é chamado para cada item da matriz.

```
let notas = [10, 3, 5]

let soma = notas.reduce(function(total, atual) {
    return total + atual
}, 0)

console.log(soma) // 18
```

## Exercício - Visualize a redução por soma

Não há tarefas nem testes neste exercício. Tudo o que você precisa fazer é observar no console o valor total, atual e, finalmente, a soma. Note como:

o valor de total começa em 0 (que é dado pelo valorInicial);
o valor de atual é de um único item da matriz para cada iteração.
o valor de total no fim, é o resultado da última iteração do redutor.
Apenas observe o algoritmo proposto no exercício.

### Código 

- [Visualize a redução por soma](./visualizeReducaoPorSoma.js)

## Exercício - Soma de notas
Calcule a soma da matriz de notas e armazene o resultado em uma variável chamada soma.

Implemente a instrução acima com um reduce.

### Testes
- Calcula a soma das notas.
- Não responda em forma de hardcode.
### Código 

- [Soma de notas](./somaDeNotas.js)

## Exercício - Soma de números
Complete a função de forma que ela retorne a soma dos números recebidos como parâmetro.

Implemente a instrução acima com um reduce.

### Testes
- Implemente a função somaNumeros().
### Código

- [Soma de números](./somaDeNumeros.js)