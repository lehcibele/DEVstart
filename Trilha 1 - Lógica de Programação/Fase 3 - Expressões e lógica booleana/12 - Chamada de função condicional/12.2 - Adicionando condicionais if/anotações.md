# Adicionando condicionais if

```
function dobro() {
    console.log("O número será dobrado)
}

function triplo() {
    console.log("O número será triplicado)
}

function executar(operacao) {
    if(operacao === "dobro") {
        return dobro()
    } 
    if(operacao === "triplo") {
        return triplo()
    }
}

executar("dobro")
executar("triplo")
```

## Exercício - Adicionando condicionais if

Agora, assim como no exercício anterior, quando a função executar() for chamada com o parâmetro dobro, deve ser executada a função dobro(). E, se a função executar() receber triplo como parâmetro, deve ser executada a função triplo().

Ou seja, codifique dentro da função executar(), para que ela receba uma strinh como parâmetro, podendo ser dobro ou triplo().

Dependendo do valor/parâmetro recebido, a função deverá invocar a devida função correspondente e usar o comando return para retornar imediatamente o resultado da execução.

Utilize o código base fornecido abaixo.

Dentro da função executar(), crie condições (utilizando if ou else if) para identificar o valor do parâmetro operacao:

2.1. Se operacao for igual a dobro, a função executar() deve chamar dobro() e retornar o seu resultado utilizando o comando return.

2.2. Se operacao for igual a triplo, a função executar() deve chamar triplo() e retornar o seu resultado utilizando o comando return.

A inclusão do return é obrigatória, pois esse comando garante que a função executar() finalize a execução imediatamente após a chamada da função desejada, conforme demonstrado na orientação em vídeo. Essa prática evita ambiguidades e assegura que o código se comporte de forma previsível.

### Testes 
- Chamar a função dobro() se a operação for "dobro".
- Chamar a função triplo() se a operação for "triplo".
- Não chamar dobro() nem triplo() em todos os outros casos.

### Código

- [Adicionando condicionais if](./adicionandoCondicionaisIf.js)