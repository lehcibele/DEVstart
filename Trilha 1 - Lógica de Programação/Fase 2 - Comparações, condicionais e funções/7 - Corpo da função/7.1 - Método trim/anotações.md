# Método .trim()

## Corpo de uma função 

- É todo o código que fica entre a chaves.

## Método .trim()

- É utilizado com strings.
- Esse método cria uma nova cópia de uma string, e nessa cópia é removido os espaços iniciais e finais.
- O método **.trim()** é muito usado em formulários.

```
let email= " marcos@meuemail.com";
email.trim() // "marcos@meuemail.com"
```

## Exercício - Formatação de e-mail

Conclua o retorno da função pegueEmail() de forma que o e-mail retornado não tenha mais espaços extras, nem à esquerda nem à direita. Ou seja, retire os espaços indesejados.

Implemente o retorno da função pegueEmail().

### Testes 
- Retire os espaços indesejados antes e depois do e-mail recebido pela função pegueEmail().
- É esperado que, ao receber qualquer e-mail com espaços no início e no final, o resultado seja apenas o endereço de e-mail, sem espaço algum.

### Código

- 🔗 [Formatação e-mail](./formatacaoEmail.js)