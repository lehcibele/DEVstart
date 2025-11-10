# Criando variáveis de instância

- Toda vez que se criar uma instância de uma nova classe, ela vai retornar um objeto vázio.
- Uma variável de instância é uma variável que pertence a uma instância especídifca de uma classe.
- As variáveis de instância que você cria no método **constructor()** são retornadas como pares de chave e valor no objeto que esse método retorna.
- A palavra-chave **this** se refere à instância atual da classe.
- O código para criar uma váriavel de instância X é: **this.x**.

## Benefícios das variáveis de instância

1. São retornadas como pares chave/valor no objeto retornado pelo constructor da classe.
2. Podem ser usadas em odos os métodos de instância da classe.

```
class Usuario {
    consructor() {
        this.idade = 30;
    }
}

let usuario = new Usuario();
console.log(usuario); // Usuario {idade: 30}
```

```
class Usuario {
    consructor() {
        this.nome = "Sara"
        this.idade = 20;
    }
}

let usuario = new Usuario();
console.log(usuario); // Usuario {nome: "sara", idade: 30}
```

## Exercício - ️️Variável de instância da classe Usuário
Complete a definição da classe Usuario, de forma que cada nova instância contenha as seguintes variáveis ​​de instância:

idade, definida com o valor 30.
votou, definido com o valor false.
Certifique-se de visualizar a variável de instância no console. Já adicionamos um console.log(usuario) para ajudá-lo.

Lembre-se de que as variáveis de instância devem ser definidas com this..

### Testes
- Crie as variáveis de instância idade e votou.

### Código 

- [️️Variável de instância da classe Usuário](./variavelDeInstanciaDaClasseUsuario.js)

## Exercício - ️️Variável de instância da classe Receita
Complete a definição da classe Receita, de forma que cada nova instância contenha as seguintes variáveis ​​de instância:

tempoDeCozimento, definida com o valor 30.
alergias, definida como uma MATRIZ que contém um único item, que será a string "nozes".
Lembrando, matriz utiliza []

let matrizDeVariavel = [a];
let matrizDeNumero = [1];
let matrizDeString = ["teste"];
Certifique-se de visualizar as variáveis de instância no console.

### Testes
- Defina as variáveis de instância tempoDeCozimento e alergias.

### Código

- [️️Variável de instância da classe Receita](./variavelDeInstanciaDaClasseReceita.js)