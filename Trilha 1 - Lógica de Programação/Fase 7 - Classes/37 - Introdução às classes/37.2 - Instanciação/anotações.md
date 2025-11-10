# Instanciação

- Você pode criar uma nova instância de uma classe usando a palavra-chave **new**.
- Ao criar uma nova instância de uma classe, você receberá de volta um objeto.
- A classe pode ser definida como um modelo para criar objetos.

```
let caio = new Usuario("Caio", "Sanches", 30);
caio.obterNomeCompleto(); // "Caio Shances"
caio.obterIniciais(); // LS
caio.podeVotar(); // true

let leila = new Usuario("Leila", "Pereira", 15);
leila.obterNomeCompleto(); // "Leia Pereira" 
leila.obterIniciais(); // LP
leia.podeVotar(); // false

console.log(caio)

// Resultado 
/*
Usuario {
    nome: "Caio",
    sobrenome: "Sanches",
    idade: 30,
    obterNomeCompleto: function() {...},
    obterIniciais: function() {...},
    podeVotar: function() {...}
}

*/
```

## Exercício - ️️Instanciando a classe Usuário
Definimos uma classe Usuario vazia. Crie uma nova variável chamada usuario e atribua-a a uma nova instância da classe Usuario.

A classe Usuario está vazia. Portanto, ao instanciar objetos dessa classe, você não precisará informar parâmetros.

Sinta-se à vontade para executar console.log() na nova instância para visualizar o objeto.

Observe que não explicamos a sintaxe da definição de uma classe, mas sinta-se à vontade para examiná-la.


### Testes
- Crie uma variável chamada usuario, que será uma instância da classe Usuario.

### Código

- [️️Instanciando a classe Usuário](./instanciandoClasseUsuario.js)