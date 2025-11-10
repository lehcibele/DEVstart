# Matriz como valor de objeto

- Os objetos podem conter qualquer tipo de dados, incluse matrizes.
- Quando um par chave/valor contém uma matriz, você pode usar nesse valor todas as propriedades e métodos de matriz que você conhece, como **.length**, **.forEach()**, **.map()**, e **.reduce()**.

```
let estudante = {
    primeiroNome: "Leticia",
    sobrenome: "Nascimento",
    temGraduacao: true,
    idade: 25,
    notas: [5, 8, 9, 10], // matriz de numeros
    interesse: ["programação", "livros",] // matriz de string
};

console.log(estudande.notas); // [5, 8, 9, 10]
estudande.notas.length; // 4

estudante.notas.forEach(function(nota) {
    console.log(nota);
});
```

## Exercício - Rótulos de jogos
Complete a função obterNumeroDeRotulos(), de forma que ela retorne o número de rótulos do jogo recebidos por parâmetro.

Importante: não faça hardcode.

Certifique-se de observar os exemplos de uso para entender a estrutura do objeto.

### Testes
- Implemente a função obterNumeroDeRotulos().

### Código

- [Rótulos de jogos](./rotuloDeJogos.js)

## Exercício - Obter primeira nota
Complete a função obterPrimeiraNota(), de forma que ela retorne a primeira nota recebida pelo aluno.

Certifique-se de não responder em hardcode.

### Testes
- Implemente a função obterPrimeiraNota().

### Código

- [Obter primeira nota](./obterPrimeiraNota.js)

## Exercício - Obter última nota
Complete a função obterUltimaNota(), de forma que ela retorne a última nota recebida pelo aluno.

Certifique-se de não responder em hardcode.

### Testes
- Implemente a função obterUltimaNota().

### Código

- [Obter última nota](./obterUltimaNota.js)

## Exercício - Obter a soma das notas
Complete a função obterSomaDasNotas(), de forma que ela retorne a soma de todas as notas.

Você é livre para usar qualquer técnica que desejar para calcular a soma.

### Testes
- Implemente a função obterSomaDasNotas().

### Código

- [Obter a soma das notas](./obterSomaDasNotas.js)