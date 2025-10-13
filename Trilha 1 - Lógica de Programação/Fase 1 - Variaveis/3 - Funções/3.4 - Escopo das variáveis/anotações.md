# Escopo das variáveis

O escopo determina onde uma variável pode ser acessada dentro de um programa e por quanto tempo ela permanece válida. 

## Resumo escopo das variáveis:
- Os parâmetros de uma função só são acessiveis dentro dessa função.

```
// A variável número NÃO pode ser acessada antes da função
function dobro(numero) {
    // A váriavel número só pode ser usada DENTRO desta função
    return numero * 2
}
// A variável numero NÃO pode ser acessada depois da função

```

## Armazenar o resultado de uma função:
- Algumas funções retornam um resultado e é bem util guarda o resultado dentro de uma varável.

```
function dobro(numero) {
    return numero * 2;
}

let primeiroResultado = dobro(4);
let segundoResultado = dobro(10);
```

## Resumo armazenar resultado de uma função:
- Os parâmetros de uma função só são acessiveis dentro dessa função.
- Este conceito é chamado de escopo da variável.
- Você pode armazenar o resultado de uma função em uma variável.

## Exercício - Armazenar valor retornado por uma função

Às vezes, temos funções que exigem mais de um parâmetro de entrada. Como um celular, por exemplo, que exige uma senha de 4 dígitos para acesso por questão de segurança. Mas como programamos isso?

Vamos praticar o armazenamento do valor retornado pela função.

### 👨🏻‍💻 Hora de praticar

Crie uma variável chamada total. Armazene na variável total o resultado da soma de 10 e 20.

Importante: utilize a função soma() para realizar esta operação.

Exemplo:

let verificado = verificarSenha(num1, num2, num3, num4)

Chamando a função verificarSenha(), que retorna verdadeiro quando os dígitos da senha estão corretos, e armazena esse retorno numa variável chamada verificado.

### Testes
- Defina o total recebendo a função soma() com os parâmetros esperados.
- Não faça hardcoding.
