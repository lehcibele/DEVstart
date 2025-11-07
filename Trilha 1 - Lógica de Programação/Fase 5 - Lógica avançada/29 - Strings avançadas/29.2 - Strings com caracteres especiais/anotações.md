# Strings com caracteres especiais

- Barra invertida \ caractere de escape

```
let mensagem1 = "Quero um copo d'água"

// isso não funciona
let mensagem2 = 'Quero um copo d'água'

let mensagem3 = 'Quero um copo d\'água'

let mensagem4 = "O jogo \"Tetris\" é divertido"
```

## Exercício - Mensagem detalhada com fechamento de string à escolha
Crie uma variável mensagem contendo a seguinte string: Você prefere um copo d'água ou um guaraná "caçulinha"?

Fique atento ao fechamento de string, dependendo da técnica utilizada.

### Testes
- Insira na variável mensagem a string esperada.

### Código

- [Mensagem detalhada com fechamento de string à escolha]

## Exercício - Descritivo da nota com interpolação

Complete a função obterDescritivoDaNota() de forma que ela retorne a seguinte mensagem:

Você tem X como nota. Ou seja, Y pontos a menos do que a nota mais alta. Se você tivesse estudado mais, poderia ter conseguido Z.

Substitua X pela nota do aluno (recebida como primeiro parâmetro).
Substitua Y pela nota mais alta, subtraída da nota do aluno (a nota mais alta é recebida como segundo parâmetro).
Substitua Z pela nota do aluno + 3 (adicione 3 pontos).
Faça com que a função retorne a string esperada.

### Testes 
- Implemente obterDescritivoDaNota().

### Código

- [Descritivo da nota com interpolação](./descritivoNotaComInterpolação.js)