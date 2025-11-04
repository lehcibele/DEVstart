# Mapa de matriz I 

```
let notas = [10, 15, 13]

// multiplicando por 2
let notasDobradas = [20, 30, 26]
```

## Utilizando .map()

- O método **.map()** permite que você aplique uma transformação para cada item de uma matriz.
- O resultado do **.map()** será uma outra matriz contendo o mesmo número de itens da matriz original, mas com a transformação aplicada.
- A função **callback** passada como parâmetro para o **.map()** será aplicada para cada item da matriz.
- Ao usar o .map(), não esqueça de inserir o **return**.
- Não confunda **.forEach()** e **.map()**. O primeiro serve para fazer iteração na matriz, e o segundo serve para gerar uma nova matriz com alguma transformação aplicada em relação a matriz original.

```
let notas = [10, 15, 13]

let notasDobradas = notas.map(function(nota) {
    return nota * 2
})

console.log(notasDobradas) // [20, 30, 26]
```

## Exercício - Notas triplicadas
Complete a função notasTriplicadas() de forma que ela retorne uma matriz contendo todas as notas triplicadas.

Siga as instruções acima.

### Testes
- Implemente a função notasTriplicadas().

### Código

- [Notas triplicadas](./notasTriplicadas.js)

## Exercício - Dobrar números
Complete a função dobreNumeros() de forma que ela retorne todos os números com o valor dobrado.

Siga as instruções acima.

### Testes
- Implemente a função dobreNumeros().
### Código

- [Dobrar números](./dobrarNumeros.js)

## Exercício - Aumentar temperaturas em 5
Complete a função aumentarTemperaturasEm5() de forma que ela retorne uma lista de temperaturas aumentadas em 5 (cada temperatura deve ser aumentada em 5).

Siga as instruções acima.

### Testes
- Implemente a função aumentarTemperaturasEm5().

### Código

- [Aumentar temperaturas em 5](./aumentarTemperaturaEm5.js)