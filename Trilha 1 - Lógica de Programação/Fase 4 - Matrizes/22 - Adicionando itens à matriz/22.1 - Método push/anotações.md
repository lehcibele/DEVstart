# Método .push()

- Um método é uma função que você pode chamar em uma determinada estrutura de dados.
- O método **.push()** serve para adicionar itens ao final da matriz.
- O método **.push()** não retorna uma matriz. Ele retorna um número, que é o novo comprimento da matriz após o acréscimo do novo item que você solicitou. 
- Ao escrever uma função, verifique se o valor que ela deve retornar é o resultado do método **.push()**, ou se é uma matriz.

```
let numeros = []
console.log(numeros) // []

numeros.push(10)
console.log(numeros) // [10]

numeros.push(15)
console.log(numeros) // [10, 15]

numeros.push(13)
console.log(numeros) // [10, 15, 13]
```

## Retorno do .push()

- **.push()** retorna o comprimento da matriz

```
numeros = [10, 20]

let valor = numeros.push(15)
console.log(valor) // 3 (novo comprimento da matriz)
```

- Exemplo errado do .push()

```
function adicionaTemperatura(temperaturas) {
    return temperaturas.push(10) // Está errado
} 

console.log(adicionaTemperatura([-5, 12, 15]))
// resultado esperado: [-5, 12, 15, 10]
// resultado real: 4
```

- Exemplo correto do .push()

```
function adicionaTemperatura(temperaturas) {
    temperaturas.push(10) 
    return temperaturas // Está errado
} 

console.log(adicionaTemperatura([-5, 12, 15]))
// resultado esperado: [-5, 12, 15, 10]
// resultado real: 4
```

## Exercício - Adicionar uma nova nota
Complete a função adicionarNovaNota() de forma que ela adicione a nota 18 à matriz de notas que ela recebe como parâmetro.

Observe os exemplos de uso para ver o que a função deve retornar.

Siga a dica a seguir.

### Testes
- Adicione 18 à matriz de notas.

### Código

- [Adicionar uma nova nota](./adicionarUmaNovaNota.js)

## Exercício - Adicionar uma nova temperatura
Complete a função adicionarNovaTemperatura() de forma que ela adicione a temperatura -6 à matriz de temperaturas que ela recebe como parâmetro.

Observe os exemplos de uso para ver o que a função deve retornar.

Siga a dica a seguir.

### Testes
- Adicione -6 à matriz de temperaturas.
- A função retorna o valor correto.

### Código

- [Adicionar uma nova temperatura](./adicionarUmaNovaTemperatura.js)