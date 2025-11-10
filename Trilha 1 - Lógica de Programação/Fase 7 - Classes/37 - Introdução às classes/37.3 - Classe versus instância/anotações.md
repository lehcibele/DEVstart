# Classe versus instância

- Uma classe é uma fábrica capaz de criar instâncias.
- Cada instância é diferente de qualquer outra instância, mesmo que seja criada a partir da mesma classe.
- As instância criadas a partir da classe são chamadas de objetos. Esses objetos contêm propriedades e métodos que descrevem uma entidade.

```
let pessoa1 = new Pessoa("Sueli Machado")
let pessoa2 = new Pessoa("Carlos Almeida")

pessoa1 === pessoa2; // false (não são iguais)
```

## Exercício - Instanciações múltiplas I
Já temos definida uma classe vazia, chamada Usuario. Siga a instruções abaixo para instanciar essa classe.

crie uma nova variável chamada usuario1, que será uma nova instância da classe Usuario.
Em seguida, crie outra variável chamada usuario2, que será uma nova instância da mesma classe Usuario.
A classe Usuario está vazia por enquanto. Portanto, não será necessário informar nenhum parâmetro ao criar as instâncias.

### Testes
- Instancie a classe Usuario numa variável chamada usuario1.
- Instancie a classe Usuario numa variável chamada usuario2.
### Código 

- [Instanciações múltiplas](./instanciacoesMultiplas1.js)

## Exericicio - Instanciações múltiplas II
Atribua uma nova instância da classe Receita a duas variáveis chamadas macarrao e salada.

Crie uma nova variável chamada macarrao e atribua essa variável a uma nova instância da classe Receita.
Em seguida, crie outra variável chamada salada e atribua essa variável a outra nova instância da mesma classe Receita.
A classe Receita está vazia. Portanto, não é necessário inserir parâmetros para instanciar objetos dessa classe.

### Testes
- Instancie a classe Receita numa variável chamada macarrao.
- Instancie a classe Receita numa variável chamada salada.
### Código

- [️️Instanciações múltiplas II](./instanciacoesMultiplas2.js)