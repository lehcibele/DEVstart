# Objetos aninhados

- Objetos dentro de objetos

```
let estudante = {
    primeiroNome: "lele",
    sobrenome: "lets",
    cursoMatriculado: {
        nome: "DevStart",
        instituto: "SENAI",
        concluido: false
    }
};

console.log(estudante.cursoMatriculado);
console.log(estudante.cursoMatriculado.nome); // "DevStart"
```

## Exercício - Obter ano e nota com objetos aninhados
Complete as funções de tal forma que:

obterAno() retorne o ano do curso do objeto estudante recebido como parâmetro.
obterNota() retorne a nota do curso do objeto estudante recebido como parâmetro.
Obs: não responda usando harcoding.

### Testes
- Implemente a função obterAno().
- Implemente a função obterNota().
### Código

- [Obter ano e nota com objetos aninhados](./obterAnoNotaComObjetosAninhados.js)

## Exercício - Objeto Tweet com objetos aninhados
Nesta atividade, você trabalhará com um objeto que representa um tweet, ou seja, uma postagem do Twitter.

Complete a função obterNomeCompleto() de forma que ela retorne o nome completo do autor da postagem recebida como parâmetro.

O nome completo é composto pelo primeiro nome (firstName), seguido por um caractere de espaço e pelo sobrenome (lastName).

Observações:

Não faça harcoding.
As propriedades do objeto Tweet não foram traduzidas, pois se trata de uma simulação parecida com o que você iria ler no aplicativo.

### Testes
- Implemente obterNomeCompleto()

### Código

- [Objeto Tweet com objetos aninhados](./objetosTweetComObjetosAninhados.js)