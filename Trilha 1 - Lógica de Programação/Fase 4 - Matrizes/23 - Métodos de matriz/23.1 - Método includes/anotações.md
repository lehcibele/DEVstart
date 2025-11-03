# Método .includes()

- O método **.includes()** permite verificar se um item existem dentro da matriz.
- O retorno desse método é do tipo **booleano**.
- Se o item for encontrado dentro da matriz é true.
- Se o item não for encontrado dentro da matriz é false.

```
let numeros = [1, 2, 4, 5]

numeros.includes(2) // true
numeros.includes(3) // false
```

## Exercício - A prova foi fácil?
O professor de uma turma gostaria de verificar se a prova que ele aplicou foi muito fácil. Ele tem uma verificação simples para isso: se pelo menos um dos alunos tirou nota 20 naquela prova, então ela é considerada muito fácil.

Complete a função oTesteEhMuitoFacil() de forma que ela retorne true quando a prova for muito fácil, e false caso contrário.

Siga a descrição.

### Testes
- A prova foi fácil?

### Código

- [A prova foi fácil?](./provaFoiFacil.js)