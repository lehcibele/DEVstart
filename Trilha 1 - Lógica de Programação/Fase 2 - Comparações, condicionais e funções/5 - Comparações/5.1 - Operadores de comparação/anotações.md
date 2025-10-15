# Operadores de comparação

## Estritamente maior >

- O operador > verifica se o número à esquerda é estritamente maior que o número à direita.

```
10 > 5 // true
5 > 8 // false
```

```
let a = 20;
let b = 10;
let resultado = a > b;
console.log(resultado) // true
```

```
let limite = 20;
limite > 30; // false
```

## Estritamente menor <

- O operador < verifica se o número à esquerda é estritamente menor que o número à direita.

```
5 < 10 // true
10 < 10 // false
5 < 3 // false
```

## Maior ou igual >=

- O operador >= verifica se o número à esquerda é  maior ou igual ao número à direita.

```
20 >= 10 // true
10 >= 10 // true
5 >= 15 // false 
```

## Menor ou igual <=

- O operador <= verifica se o número à esquerda é  menor ou igual ao número à direita.
```
10 <= 20 // true
10 <= 10 // true
15 <= 5 // false 
```

## Exercício - Operadores de comparação

Complete a atribuição da variável podeVotar, de forma que ela receba uma comparação entre idade e o valor de 16 (anos). Esta comparação deve utilizar a idade com a operação maior ou igual a 16.

Crie a comparação entre idade com a operação maior ou igual a 16 e a atribua o resultado à variável podeVotar.

### Testes
- A variável podeVotar deve receber o valor true como resultado da comparação entre a variável idade e 16.
- Não deixe o código em hardcode. Realmente atribua a comparação requisitada.

```
let idade = 20 
let podeVotar = idade >= 16;
console.log(podeVotar) // true (porque 20 é maior ou igual a 16)
```