# Construtor de classe com parâmetros

- Os parâmetros para o método construtor são recebidos quando a instanciação da classe acontece, ou seja, quando você cria uma variável usando a palavra-chave **new**.

```
class Usuario {
    constructor(nome, sobrenome) {
        console.log("Criando instância de usuário);

        console.log(nome);

        console.log(sobrenome);
    }
}

let sergio = new Usuario("Sergio", "Diniz");
```

## Exercício - Visualizar parâmetros do construtor
Este é um desafio de visualização, não há testes.

Execute o código e repare que chamamos new Usuario() com alguns parâmetros. Então, podemos obter esses parâmetros no método constructor() e exibi-los no console.

### Código 

- [Visualizar parâmetros do construtor](./visualizarParametrosDoConstrutor.js)

## Exercício - Definir parâmetros do construtor
Nesta atividade, você deve criar um método construtor para a classe Receita. Esse construtor deverá receber dois parâmetros: nome e calorias.

Dentro do método construtor que você vai criar, experimente imprimir no console os dois parâmetros recebidos, para testar se o código está funcionando corretamente.

### Testes
- Implemente o método construtor dentro da classe Receita.

### Código

- [Definir parâmetros do construtor](./definirParametrosDoConstrutor.js)