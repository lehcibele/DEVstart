# Métodos de strings

## toUpperCase()
- Permite fazer uma nova cópia da string convertendo cada caractere para maiúscula.

```
let nome = "Enzo";
let nomeMaiusculo = nome.toUpperCase();
console.log(nomeMaiusculo); //ENZO
console.log(nome); // enzo
```

## toLowerCase()
- Permite fazer uma nova cópia da string convertendo cada caractere para minúscula.

```
let nome = "mARia";
let nomeMinusculo = nome.toLowerCase();
console.log(nomeMinusculo); //ENZO
console.log(nome); // enzo
```

## Exercício - Utilizando o método toUpperCase

Neste exercício, você praticará o uso do método toUpperCase.

Atribua à variável nomeMaiusculo o resultado da aplicação do método toUpperCase() na variável nome. Assim, todas as letras do nome estarão em MAIÚSCULAS.

### Testes
- A variável nomeMaiusculo deve conter o nome todo em letras maiúsculas.
- Você não deve atribuir um valor hardcode à variável nomeMaisculo.

```
let nome = "henrique"
// altere apenas a linha abaixo
let nomeMaiusculo = nome.toUpperCase();

console.log(nomeMaiusculo) // "HENRIQUE"
console.log(nome) // "henrique" (não foi alterado)
```

## Exercício - Utilizando o método toLowerCase

Neste exercício, vamos praticar o método toLowerCase.

Atribua à variável nomeMinusculo o resultado da aplicação do método toLowerCase() na variável nome. Assim, todas as letras do nome estarão em minúsculas.

### Testes 
- A variável nomeMinusculo deve conter o nome todo em letras minúsculas.
- Não atribuir um valor hardcode à variável nomeMinusculo.

```
let nome = "mADalenA"
// altere apenas a linha abaixo
let nomeMinusculo = nome.toLowerCase();

console.log(nomeMinusculo) // "madalena"
console.log(nome) // "mADalenA" (não foi alterado)
```