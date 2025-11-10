# Introdução aos métodos de instância

- O método de instância é aquele que pode ser chamado em uma instância de uma classe.
- Usamos métodos de instância para agrupar funcionalidades com base em sua lógica. Por exemplo, as funções de pagamento são definidas em uma classe. Pagamento com métodos de instância.
- Outro benefício dos métodos de instância é que eles podem usar variáveis de instância.
- A sintaxe de um método de instância é semelhante à de um método construtor.

```
class Usuario {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Método
    obterNomeCompleto() {
        return "Nome completo aqui";
    }
}

let usuario = new Usuario("Fabio", "Lima");
usuario.obterNomeCompleto(); // "Nome completo aqui"
```

```
class Pagamento {
    constructor(metodoDePagamento) {
        this.metodoDePagamento = metodoDePagamento;
    }

    podePagar() {
        // código
    }

    jaPagou() {
        // código
    }

    redirecionarParaBanco() {
        // código
    }
}
```

## Exercício 
Esta é uma atividade de visualização, não há testes.

Execute o código e veja que podemos chamar o método de instância obterNomeCompleto() na instância da classe Usuario.

Por enquanto, o método obterNomeCompleto() está retornando apenas uma string definida via hardcoding. Mais adiante, você aprenderá como como implementar a funcionalidade completa do método.

Não se esqueça de ler a definição e o uso da classe.

### Código

- [Visualização de método de instância](./visualizacaoDeMetodoDeInstancia.js)

## Exercício - Retorno de método de instância
reencha a classe Usuario de forma que ela contenha os seguintes métodos de instância:

obterNomeCompleto(), que deve retornar a seguinte string: "Nome completo aqui".
podeVotar(), que deve retornar true.
jaVotou(), que deve retornar false.
Siga as orientações acima.

### Testes
- Implemente o método de instância obterNomeCompleto().
- Implemente o método de instância podeVotar().
- Implemente o método de instância jaVotou().
### Código

- [Retorno de método de instância](./retornoDoMetodoDeInstancia.js)