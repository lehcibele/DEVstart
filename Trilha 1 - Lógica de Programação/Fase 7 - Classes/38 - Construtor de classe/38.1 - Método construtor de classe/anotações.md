# Método construtor de classe

- O método construtor da classe, chamado **constructor()**, é chamado automaticamente toda vez uma nova instância dessa classe é criada.
- O método construtor precisa estar dentro da definição da classe.
- Ao definir o método construtor, não se usa a palavra-chave **function**.

```
class Usuario {
    constructor() {
        console.log("Criando uma instância")
    }
}

let usuario1 = new Usuario(); // "Criando uma instância"
```

## Exercício - ️️Visualizando o construtor
Esta é uma atividade de visualização, não há testes.

Execute o código e veja como cada nova chamada de Usuario() chamará automaticamente o método constructor(), que então exibirá no console a mensagem: "Criando uma nova instância da classe Usuario".

### Código

- [️️Visualizando o construtor](./visualizandoConstrutor.js)

## Exercício - Definindo o construtor
Complete a classe Receita de forma que, sempre que criarmos uma nova instância dessa classe, o console automaticamente exiba a seguinte mensagem: "Nova receita criada".

Siga as instruções fornecidas e verifique se a mensagem "Nova receita criada" será exibida no console.

### Testes
- Implemente o método constructor().

### Código

- [Definindo o construtor](./definindoConstrutor.js)