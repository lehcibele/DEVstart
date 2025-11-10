# Matriz de objetos

- As matrizes de objetos são um tipo de dados bastante comun, porquer nos permite representar uma lista de entidades do mundo real.
- Exemplos de matrizes de objetos:
    - Uma lista de usuários;
    - Uma lista de tuítes;
    - Uma lista de receitas.
- Para representar uma lista de receitas, usamos uma matriz de objetos. Cada item dessa matriz é um objeto representando uma receita.

## Lista de usuários

```
let usuarios = [
    {
        nome: "Sara",
        sobrenome: "Buarque",
        idade: 21,
    },
    {
        nome: "Carlos",
        sobrenome: "Ferreira",
        idade: 28,
    },
    {
        nome: "Valéria",
        sobrenome: "Rossi",
        idade: 24,
    },
]
```

## Lista de receitas

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
]
```