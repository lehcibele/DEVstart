# Reatribuindo valor à variável

## Função limpaEmail

- A função deixa o email todo minúsculo e remove os espaçoes iniciais e finais.

```
function limpaEmail(email) {
    let limpo = email;
    limpo = limpo.toLowerCase();
    limpo = limpo.trim();
    return limpo;
}
```

- Os métodos **trim()**, **toLowerCase()** e **toUppercase()** criam novas cópias da variável. Eles não alteram a variável original.
- Para alterar a variável, você deve reatribuir essa variável a ela mesma com uma chamada de função. 

## Exercício - Transforme todas as letras em maiúsculas

Complete a função pegueNome() de forma que ela converta todo o nome em letras maiúsculas e também remova os espaços à esquerda e à direita. Tente fazê-lo passo a passo, em várias linhas, seguindo a mesma abordagem que vimos anteriormente. Sinta-se à vontade para adicionar logs do console ao longo do caminho para ver as transformações passo a passo.

Implemente o retorno da função pegueNome().

### testes
- Retire os espaços indesejados e, ao mesmo tempo, faça com que todas letras do nome fiquem em maiúsculas. É esperado que a sua implementação, ao receber qualquer nome como " bruno", retorne o seguinte resultado: "BRUNO".
- É esperado que a sua implementação, ao receber qualquer nome como " alex ", retorne o seguinte resultado: "ALEX".

### Código

- 🔗 [Transforme Todas as letras em maiúsculas](./transformarLetrasMaiusculas.js)

