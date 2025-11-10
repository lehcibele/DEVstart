# Iterando com matrizes de objetos


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

usuarios.forEach(function(usuario) {
    console.log(usuario);
})
```

```
let receitas = [
    {
        titulo: "Brigadeiro",
        alergias: ["Chocolate"],
        minutosDePreparo: 30,
        classificacao: 4.5
    },
    {
        titulo: "Lasanha",
        alergias: ["leite", "tomate"],
        minutosDePreparo: 45,
        classificacao: 4.8
    }
];

let titulos = receitas.map(function(receita) {
    console.log(receita)
    return receita.titulo;
})

console.log(titulos) // ["Brigadeiro", "Lasanha"]
```

```
let concessionaria = [
    {
        nome: "Gol",
        ano: 2005,
        fabricante: "Volkswagen",
        valor: 13500
    },
    {
        nome: "Uno",
        ano: 2016,
        fabricante: "Fiat",
        valor: 9000
    },
    {
        nome: "F75",
        ano: 1978,
        fabricante: "Ford",
        valor: 12500
    }
];

let carroNomeAno = concessionaria.map(function(carro) {
    return {
        nome: carro.nome,
        ano: carro.ano
    }
})
```

## Exercício - Soma de todas as notas
Complete a função obterSomaDeTodasAsNotas(), de forma que ela some todas as notas contidas na matriz notas que ela recebe como parâmetro.

Leve o tempo que for necessário para resolver esse desafio e tente fazê-lo passo a passo.

### Testes
- Implemente a função obterSomaDeTodasAsNotas().
- Sua resposta não pode usar hardcoding.
### Código

- [Soma de todas as notas](./somaDeTodasAsNotas.js)

## Exercício - Soma de notas aninhadas
Complete a função obterSomaDeNotasAninhadas(), de forma que ela some todas as notas do curso de aprendizagem de programação fornecidas com o parâmetro estudantes.

### Testes
- Implemente a função obterSomaDeNotasAninhadas().

### Código

- [Soma de notas aninhadas](./somaDeNotasAninhadas.js)

## Exercício - Visualize a transformação
Este é um desafio de visualização. Portanto, não há testes.

Execute o código e veja como estamos transformando a matriz de objetos em matriz de strings (os títulos das receitas).
Altere a instrução return receita.titulo para return receita e veja como o objeto permanece inalterado. Isso acontece porque tomamos o objeto receita e o retornamos como está.
Experimente com outras propriedades (como preparacaoEmMinutos e classificacao) e observe o resultado.
Observe como temos 2 instruções return: uma dentro da função callback .map(), e outra dentro da função obterTitulosDasReceitas().

### Código

- [Visualize a transformação](./visualizeATransformacao.js)

## Exercício - Obter nomes completos
Complete a função obterNomesCompletos(), de forma que ela retorne uma matriz contendo o nome completo de cada usuário.

O nome completo é uma string contendo o nome, um caractere de espaço e o sobrenome.

Leve o tempo que for necessário neste desafio e tente fazê-lo passo a passo.

### Testes
- mplemente a função obterNomesCompletos().
### Código

- [Obter nomes completos](./obterNomesCompletos.js)