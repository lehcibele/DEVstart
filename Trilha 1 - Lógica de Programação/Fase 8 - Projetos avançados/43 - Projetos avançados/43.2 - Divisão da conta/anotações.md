# Divisão da conta

- Converter uma string em um número usa **Number.parseInt()**.

```
let string = "35";

let numero = Number.parseInt(string, 10);
```

## Exercício - ️️Aplicativo para dividir contas
O construtor da classe Conta cria uma variável de instância chamada valores, que é uma matriz vazia. Complete a classe Conta com os seguintes métodos de instância:

adicionarTotais(), que adiciona o valor recebido à variável de instância valores. Obs: o valor que ela recebe é uma string.
obterQuantidadeDeValores(), que retorna o número de itens na variável de instância valores.
obterTotal(), que retorna a soma de todos os números dentro da variável de instância valores.
obterMedia(), que retorna a média que uma pessoa precisa pagar, ou seja, a soma divida pela contagem.
É importante salientar que você recebe valorestr ou seja, valor do usuário vem como string, então você deve convertê-lo em número. Para isso, pode utilizar o Number.parseInt(valorestr, 10);

Dica: você pode chamar métodos de instância existentes usando o this.

### Testes
- Implemente adicionarTotais()
- Implemente obterQuantidadeDeValores()
- Implemente obterTotal()
- Implemente obterMedia()

### Código 

- [️️Aplicativo para dividir contas](./aplicativoParaDividirContas.js)