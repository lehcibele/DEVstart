# Trabalhando com matrizes de objetos

```
let usuarios = {
    {
        nome: "Sara",
        sobrenome: "Buarque",
    },
    {
        nome: "Carlos",
        sobrenome: "Ferreira",
    },
}

// Isso está errado
console.log(usuarios.nome)

// Isso está certo
console.log(usuarios[0])
console.log(usuarios[0].nome)
console.log(usuarios[1].nome)
```

## Exercício - Nome do primeiro curso
Preencha a função obterNomeDoPrimeiroCurso() de forma que ela retorne o nome do primeiro curso disponível na matriz cursos.

Não faça harcoding.

### Testes
- Implemente a função obterNomeDoPrimeiroCurso().
- Sua resposta não pode ter hardcoding.

### Código

- [Nome do primeiro curso](./nomeDoPrimeiroCurso.js)

## Exercício - Nome completo do último usuário
Preencha a função obterNomeCompletoDoUltimoUsuario(), de forma que ela retorne o nome completo do último usuário.

Exemplo, se o último usuário tivesse o nome Marcelo e sobrenome Santana deveria sair "Marcelo Santana". Isto é, lembre-se de dar espaço entre o nome e sobrenome.

obterNomeCompletoDoUltimoUsuario(usuarios) // Marcelo Santana
O nome completo é uma string contendo o nome, um caractere de espaço e o sobrenome.

Não faça harcoding.

### Testes
- Implemente a função obterNomeCompletoDoUltimoUsuario().
- Sua resposta não pode usar hardcoding.

### Código

- [Nome completo do último usuário](./nomeCompletoUltimoUsuario.js)

## Exercício - Obter nota do primeiro aluno
Preencha a função obterNotaDoPrimeiroAluno(), de forma que ela retorne a nota do primeiro aluno do curso de introdução à programação.

Não faça hardcoding.

### Testes
-Implemente a função obterNotaDoPrimeiroAluno().
- Sua resposta não pode ter hardcoding.

### Código

- [Obter nota do primeiro aluno](./obterNotaDoPrimeiroAluno.js)