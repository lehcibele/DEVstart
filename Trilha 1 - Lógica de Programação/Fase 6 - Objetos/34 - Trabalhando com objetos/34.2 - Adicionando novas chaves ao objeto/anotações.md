# Adicionando novas chaves ao objeto

```
let usuario = {
    primeiroNome: "Gabriela",
    sobrenome: "Siqueira"
};

usuario.idade = 20;
console.log(usuario); 
```

## Exercício - Visualizando undefined no objeto

Nesta atividade, você vai visualizar o valor undefined (indefinido) ao tentar acessar uma chave inexistente dentro de um objeto.

Não é necessário modificar o código que lhe foi fornecido. Apenas execute o exercício e visualize como config.moda (com erro de digitação) resulta em undefined.

Execute o código e veja o valor undefined sendo exibido no console.

### Código

- [Visualizando undefined no objeto](./visualizandoUndefinedNoObjeto.js)

## Exercício - Correção de erro ao adicionar novas chaves ao objeto
O programador que escreveu este código estava tentando exibir no console a descrição do curso convertida para letras maiúsculas. Mas, por algum motivo, esse código está retornando um erro.

Execute o código e veja o que acontece! Então, corrija o erro.

### Testes
- Corrija o erro.

### Código

- [Correção de erro ao adicionar novas chaves ao objeto](./correcaoAoAdicionarNovasChavesAoObjeto.js)

## Exercício - Obter mensagem de votação
Complete a função obterMensagemDeVotacao() de forma que ela retorne:

"Você pode votar" quando o usuário tiver 16 anos ou mais.
"Você não pode votar" caso contrário.
Caso queira, você pode retornar a sua resposta sem a necessidade de if/else.

### Testes
- Implemente a função obterMensagemDeVotacao().

### Código

- [Obter mensagem de votação](./obterMensagemDeVotacao.js)

## Exercício - Adicionar quantidade de aulas
Complete a função adicionarQuantidadeDeAulas(), de forma que ela adicione a propriedade quantidadeDeAulas ao objeto curso que ela recebe como parâmetro.

Obs: a função recebe o valor de quantidadeDeAulas como segundo parâmetro (total).

A função deve adicionar ao objeto recebido como primeiro parâmetro uma nova propriedade chamada quantidadeDeAulas.
Essa propriedade deve receber o valor que está sendo passado à função pelo parâmetro total.

### Testes
- Implemente a função adicionarQuantidadeDeAulas().

### Código

- [Adicionar quantidade de aulas](./adicionandoQuantidadeDeAulas.js)
