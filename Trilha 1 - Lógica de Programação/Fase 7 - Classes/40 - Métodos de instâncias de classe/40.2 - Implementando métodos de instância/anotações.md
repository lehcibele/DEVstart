# Implementando métodos de instância

- Os parâmetros recebidos pelo construtor da classe não são acessíveis nos métodos de instância.
- É por isso que capturamos os parâmetros do construtor e os atribuimos às variáveis de instância. Assim, esses valores ficam acessíveis a todos os métodos de instância da classe.
- Não se esqueça de usar o **this** sempre qe precisar se referir a uma variável de instância.

```
class Usuario {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    // Método
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    podeVotar() {
        return this.idade >= 16;
    }
}

let usuario = new Usuario("Fabio", "Lima");
usuario.obterNomeCompleto(); // "Fabio Lima"
```