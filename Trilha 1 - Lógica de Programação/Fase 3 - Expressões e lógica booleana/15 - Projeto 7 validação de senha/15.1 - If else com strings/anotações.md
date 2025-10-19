# If Else com strings

## Comparação de strings

```
let nome = "Simone"
if(nome === "Simone") {
    // nome é Simone
} else {
    // nome não é Simone
}
```

## Exercício - Validação de senha 1

Esta é uma validação básica de senha que você costuma ver ao se registrar em um site.

Complete a função senhaEValida() de forma que ela retorne true quando a senha for válida e false caso contrário.

A senha é considerada válida quando tem pelo menos 10 caracteres.

Implemente a funcionalidade solicitada.

### Testes
- senhaEValida("Senh4@DoJo4o") retorna true, pois essa senha é válida.
- senhaEValida("Senh4@DoJ") retorna false, pois essa senha não é válida.

### Código

- [Validação de senha 1](./validacaoSenha1.js)