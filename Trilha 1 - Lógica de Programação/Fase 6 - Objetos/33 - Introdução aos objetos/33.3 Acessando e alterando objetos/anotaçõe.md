# Acessando e alterando objetos

## Acessando a chave de um objeto

```
let pessoa = {
    primeiroNome: "Carla",
    sobrenome: "Santos",
}

console.log(pessoa.primeiroNome) // "carla"
```

```
function obterIdade(usuario) {
    return `O usuário tem ${usuario.idade} anos`;
}

let pessoa = {
    nome: "Manoel",
    idade: 20
};

obterIdade(pessoa) // "O usuário tem 20 anos"
```

## Modificando o valor de um objeto

```
let pessoa = {
    nome: "Dani",
    idade: 17
};

pessoa.idade = 25;
console.log(pessoa) // {nome: "dani", idade: 25}
```

## Exercício - Obter o nome do curso acessando o valor do objeto

Preencha a função obterNomeDoCurso(), de forma que ela retorne o nome do curso cujo objeto ela recebe como parâmetro.

Observe os valores que são exibidos no console ao completar a função.

### Testes
- Implemente a função obterNomeDoCurso().

### Código

- [Obter o nome do curso acessando o valor do objeto](./obterNomeDoCursoAcessandoObjeto.js)

## Exercício - Obter tema acessando o objeto de configuração
Complete a função obterTema(), de forma que ela retorne o tema do objeto de configuração que ela recebe como parâmetro.

A função obterTema() deve retornar o tema da configuração.

### Testes
- Implemente a função obterTema().

### Código

- [Obter tema acessando o objeto de configuração](./obterTemaAcessandoObjeto.js)

## Exercício - Atualizando a propriedade do objeto usuário
Complete a função atualizarUsuario() de forma que o valor da propriedade pagou do objeto usuário recebido por parâmentro seja modificado para true.

A função atualizarUsuario() deve alterar a propriedade pagou.

### Testes
- Implemente a função atualizarUsuario().

### Código

- [Atualizando a propriedade do objeto usuário](./atualizandoPropriedadeDoObjetoUsuario.js)