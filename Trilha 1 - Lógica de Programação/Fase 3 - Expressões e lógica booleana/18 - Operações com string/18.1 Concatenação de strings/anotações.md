# Concatenação de strings

## Concatenação

- A concatenação consiste em unir duas ou mais strings. 
- Para concaternar strings, utilize o operador +.

```
let nome = "Gabriela"
let mensagem = "Olá, " + nome
console.log(mensagem) // Olá, Gabriela
```

```
function cumprimentarUsuario(nome) {
    return "Olá, " + nome
}

console.log(cumprimentarUsuario("Gabriela"))
console.log(cumprimentarUsuario("Eduador"))
```

## Concatenação de strings versus adição

| Operandos        | Operação | Exemplo   |
| ---------------- | -------- | --------- |
| Número + número  | Adição   | 1 + 3 = 4 |
| Número + string  | Concatenação | "parte " + 2 = "parte 2" |

```
function somar(a, b) {
    return a + b
}
```

```
let total = 30
let nota = 5
let nome = "Vinicius"
total + nota // 35
20 + total // 50
"Olá, " + nome // "Olá, Vinicius "
```

## Exercício - Cumprimentar o usuário concatenando strings

Complete a função cumprimentarUsuario(), de forma que ela retorne a string "Bem-vindo, X", onde X é o nome do usuário recebido como parâmetro.

Complete a função seguindo as especificações.

### Testes
- Implemente a função cumprimentarUsuario corretamente.

### Código

- [Cumprimentar o usuário concatenando strings](./comprimentarUsarioConcatenandoStrings.js)

## Exerício - Descrição da idade concatenando strings

Complete a função obterDescricaoDaIdade(), de forma que ela retorne a string "Você tem atualmente X anos", onde X é a idade do usuário recebida como parâmetro.

Complete a função conforme foi especificado.

### Testes
- Implemente a função obterDescricaoDaIdade() corretamente.

### Código 

- [Descrição da idade concatenando strings](./descricaoIdadeConcatenandoStrings.js)

## Exercício - Mostrar confirmação de e-mail concatenando strings
Complete a função mostrarConfirmacaoDeEmail() de forma que ela retorne "Acabamos de enviar um e-mail para X. Por favor, verifique sua caixa de entrada.", onde X é o e-mail recebido como parâmetro.

Complete a função conforme solicitado. Tome cuidado para escrever o texto exatamente como está acima.

### Testes
- Implemente a função mostrarConfirmacaoDeEmail() corretamente.

### Código

- [Mostrar confirmação de e-mail concatenando strings](./mostrarConfirmacaoEmail.js)

## Exercício - Nome completo concatenando strings

Complete a função obterNomeCompleto() de forma que ela recupere o nome completo do usuário.

O retorno deve ser o primeiro nome, seguido por um caractere de espaço e, em seguida, o sobrenome.

Por exemplo, obterNomeCompleto("Alex", "Seixas") deve retornar uma string "Alex Seixas".

Complete a função conforme foi solicitado.

### Testes
- Implemente a função obterNomeCompleto() corretamente.

### Código

- [Nome completo concatenando strings](./nomeCompletoConcatenandoStrings.js)