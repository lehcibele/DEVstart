# Estendendo a classe pai

- O conceito de **herança de classe** significa que uma classe filha herda udo de sua classe pai. 
- A classe pai é aquela que contém as funcionalidades comuns a ambas as classes.
- Herdar funcionalidades significa que você não precisa reescrever os métodos, porue eles serão herdados automaticamente pela linguagem de programação.
- Para herdar de uma classe, você usa a palavra-chave **extends** seguida do nome da classe pai.
- Certifique-se que a classe pai esteja definida antes da classe filha, pois do contrário o código dará erro.

```
// Definição da classe pai
class Funcionario {
    constructor(nome, sobrenome) {
        this.nome = nome; 
        this.sobrenome = sobrenome;
    }

    obtemNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    obtemIniciais() {
        return this.nome[0] + this.sobrenome[0];
    }
}

class Administrador extends Funcionario {
    pagarSalarios() {
        console.log("Pagando salários...");
    }
}

let regina = new Administrador("Regina", "Silva");
regina.obtemNomeCompleto(); // "Regina Silva"
regina.obtemInicias(); // "RS"
regina.pagarSalarios() // "Pagando salários..."
```

## Exercício - ️️Classes Escritor e Usuário
Defina uma classe Escritor, que deve estender a classe Usuario já existente. A classe Escritor deve herdar os métodos da classe Usuario e, além disso, implementar o seguinte método de instância específico:

publicarArtigo(): um método que exibe no console a mensagem "Artigo publicado".
Para evitar duplicação de código, faça com que a classe Escritor seja filha da classe Usuario, utilizando herança. Certifique-se de que o método publicarArtigo() seja implementado dentro da classe Escritor.

### Testes
- Defina a classe Escritor.
- Implemente o método de instância publicarArtigo().
- Faça com que a classe Escritor seja filha da classe Usuario.
### Código

- [️️Classes Escritor e Usuário](./classesEscritorEUsuario.js)

## Exercício - Herança de classe em lista de tarefas
Imagine que você esteja criando um aplicativo de lista de tarefas. Nesse aplicativo, é necessário cadastrar dois tipos de tarefas, cada uma implementada em uma classe diferente:

Tarefa, que é uma tarefa que você deseja realizar futuramente.
TarefaMarcar, que é uma tarefa que pode ser marcada como concluída ou não concluída.
As classes Tarefa e TarefaMarcar compartilham algumas funcionalidades, mas a classe TarefaMarcar deve ter uma funcionalidade extra chamada marcarComoConcluida(). Esse método de instância deve marcar a tarefa como concluída.

No código que você está recebendo, a classe Tarefa já está criada. Crie a classe TarefaMarcar, que será filha de Tarefa, e dentro dela crie o método de instância marcarComoConcluida().

Notas:

Uma classe filha também pode acessar variáveis ​​de instância de sua classe pai.
Para marcar a tarefa como concluída, atribua true à variável de instância estaCompleta.

### Testes
- Crie a classe TarefaMarcar, como filha da classe Tarefa.
- Implemente o método de instância marcarComoConcluida() da classe TarefaMarcar.

### Código

- [Herança de classe em lista de tarefas](./herancaDeClasseEmListaDeTarefas.js)