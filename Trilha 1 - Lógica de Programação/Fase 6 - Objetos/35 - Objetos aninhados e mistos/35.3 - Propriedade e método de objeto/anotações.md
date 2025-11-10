# Propriedade e método de objeto

- Um objeto também pode ocnter uma função. Ela é chamada de **método**.
- Diferença entre propriedades e métodos
- Quando o valor da chave é um:
    - String
    - Número
    - Booleano
    - Matriz 
    - Objeto
    - O valor da chave é uma propriedade
- Quando o valor da chave é uma:
    - Função
    - O valor da chave é um método.

```
let usuario = {
    nome: "lele",
    sobrenome: "cibe",
    idade: 25,
    podeVotar: function(idade) {
        return idade >= 16;
    }
};

usuario.podevotar(30) // true
```

```
let professor = {
    nome: "Luana",
    sobrenome: "Borges",
    fazerChamada: function(alunos) {
        alunos.map(function(aluno) {
            console.log(`${aluno}`)
        })
    }
};

professor.fazerChamada(["Maria", "Zenélia", "Jonatão","Henrique"]);
```

## Atribuindo uma váriavel a um valor de objeto

```
let nome = "Jorge",

let usuario = {
    nome: nome,
    idade: 21
};

console.log(usuario)

```
