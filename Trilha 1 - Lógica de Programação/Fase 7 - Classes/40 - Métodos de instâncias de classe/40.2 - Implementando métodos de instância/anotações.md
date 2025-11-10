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

## Exercício - Obter nome completo
Implemente o método de instância obterNomeCompleto(), de forma que ele retorne uma string contendo o nome e o sobrenome do usuário separados por um caractere de espaço.

Repare que, enquanto você não definir o método solicitado, o código apresentará erro. Isso acontece porque o código fornecido a você já inclui duas chamadas ao método obterNomeCompleto().

Quando terminar a atividade, observe como o método obterNomeCompleto() retorna valores diferentes, dependendo da instância de onde ele é chamado.

### Testes
- Implemente o método de instância obterNomeCompleto().
### Código

- [Obter nome completo](./obterNomeCompleto.js)

## Exercício - Calorias
Implemente os seguintes métodos de instância para a classe Receita:

ehBaixaCaloria(), que retorna true quando as calorias da receita são 400 ou menos, e false caso contrário.
ehAltaCaloria(), que retorna true quando as calorias da receita são 600 ou mais, e false caso contrário.
Assim que você definir cada método, tente usá-lo para conferir qual valor ele está retornando.

### Testes
- Defina o método de instância ehBaixaCaloria().
- Defina o método de instância ehAltaCaloria().
- Não faça hardcoding.
### Código

- [Calorias](./calorias.js)

## Exercício - Métodos da classe Usuário
Implemente os seguintes métodos de instância para a classe Usuario:

obterNomeCompleto(), que retornará uma string contendo o nome e o sobrenome do usuário separados por um caractere de espaço.
obterIniciais(), que retornará uma string contendo o primeiro caractere do nome, imediatamente seguido pelo primeiro caractere do sobrenome.
podeVotar(), que retornará true quando o usuário tiver 16 anos ou mais, e false caso contrário.
Dicas:

Assim que você definir um método, tente usá-lo para verificar qual valor ele está retornando.
Não se esqueça de implementar o método construtor da classe.

### Testes
- Defina o método de instância obterNomeCompleto().
- Defina o método de instância obterIniciais().
- Defina o método de instância podeVotar().

Não faça hardcoding.
### Código

- [Métodos da classe Usuário](./metodosDaClasseUsuario.js)