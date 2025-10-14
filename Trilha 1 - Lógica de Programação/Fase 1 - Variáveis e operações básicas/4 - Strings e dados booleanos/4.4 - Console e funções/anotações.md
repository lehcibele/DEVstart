# Console e funções

- console.log() não substitui o retorno da função.
- O console.log() nunca modifica o resultado de uma função, ele apenas mostra uma string ou um número no console.

```
function dobro(numero) {
    console.log(numero * 2);
    return numero * 2;
}
```

```
function dobro(numero) {
    console.log(numero * 2);
}

let resultado = dobro(4);
console.log(resultado); // resultado é undefined
```

## Exercício - Console dentro de função

O console.log é muito útil dentro de funções. Este exercício lhe permitirá verificar isso na prática.

Dentro da função dobro existente, registre um console antes do return. Assim, o console apresentará o dobro do número recebido.

### Testes
- Registre no console a variável numero multiplicada por 2. (Não esqueça de escrever o console.log antes do return).

```
function dobro(numero) {
    console.log(numero * 2);
    return numero * 2
}

let resultado = dobro(4) // resultado receberá 8,
// e será impresso 8 no console
```

## Exercício - Chamando uma função dentro do console

Neste exercício, você verá como chamar uma função a partir do console.log.

Complete a função soma de forma que ela retorne a soma entre os parâmetros a e b.

### Testes
- Faça com que a função soma retorne a soma dos parâmetros a e b. (Repare nos resultados que saem pelos dois Consoles com chamadas da função soma com entradas de parâmetros diferentes.)

