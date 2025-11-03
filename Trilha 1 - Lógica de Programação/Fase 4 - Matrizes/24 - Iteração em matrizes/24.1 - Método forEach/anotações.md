# Método .forEach()

- O método **.forEach()** permite iterar com os elementos da matriz.
- A função que você passar com parâmetro para o .forEach() será chamada para cada item da matriz.

```
let notas = [3, 9, 6]
let soma = notas[0] + notas[1] + notas[2]
```

```
let notas = [10, 8, 4, 5]

notas.forEach(function mostrarNota(nota){
    console.log(nota)
})

// Resltado impresso no console: 
// 10
// 8
// 4
// 5
```

## Callback

- A função **callback** é passada como parâmetro do .forEach(), e será chamada automaticamente pela linguagem de programação.
- Podemos remover o nome de uma função callback. Ela passa, então, a ser considerada uma **função anônima**.
- O **.forEach()** chama a função callback e passa a ela um item da matriz como parâmetro. Esse processo é repetido para todos os itens dessa matriz.

### Função callback com nome

```
let notas = [4, 10, 8]

notas.forEach(function mostrarNota(nota) {
    console.log(nota)
})
```

### Função callback sem nome

```
let notas = [4, 10, 8]

notas.forEach(function (nota) {
    console.log(nota)
})
```

## Sintaxe do .forEach()

- Quando estiver trabalhando com iteração em matrizes, fique atento a dois elementos:
    - 1. A chamada do .forEach().
    - 2. A função callback passada para o .forEach() como parâmetro.
- Sempre use plural no nome da matriz e singular no nome do item da matriz.
- Sempre imprima o item da matriz no console.

## Exericio - Iterar sobre os números
Você está recebendo um código que itera sobre uma matriz de números.

Dentro da função callback, insira um comando para exibir no console o número que está sendo acessado na iteração atual. Não altere o código existente, apenas adicione a linha que faz o log do número no console.

Nota: A variável numero só está disponível dentro da function(numero) { ... }.

Siga a descrição.

### Testes
- Exiba todos os números no console.

### Código

- [Iterar sobre os números](./iterarSobreNumeros.js)

## Exercício - Iterar sobre temperaturas

Você está recebendo um código que itera sobre uma matriz de temperaturas.

Dentro da função callback, insira um comando para exibir a temperatura da iteração atual no console.

Passe algum tempo observando o console para entender a mudança da matriz de temperaturas para o item da matriz de temperaturas.

Siga a descrição.

### Testes
- Registre todas as temperaturas no console.

### Código
 
- [Iterar sobre temperaturas](./iterarSobreTemperaturas.js)

## Exercício - Iterar sobre as notas

Escreva um código para iterar sobre a matriz de notas e exibir todos os itens dessa matriz no console.

Siga a descrição.

### Testes 
- Utilizou forEach no código
- Deu um console da nota

### Código

- [Iterar sobre as notas](./iterarSobreNotas.js)