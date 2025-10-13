# Parâmetros em funções

Os parâmetros são essenciais para tornar nossas funções mais flexíveis e reutilizáveis, permitindo que elas recebam dados externos e executem ações específicas com base nesses dados.

## Resumo
- Um parâmetro é uma variável que uma função recebe.
- A maioria das funções usará essa variável recebida e calculará o resultado com base nela.
- Para chamar uma função, você deve começar com o nome dela e então inserir, entre parênteses, o valor que deseja passar como parâmetro.

## Exercício - Chame a função

Para realizar uma ação específica em um controle remoto, como mudar de canal ou ajustar a temperatura, é necessário pressionar um botão específico. É o botão que irá chamar a função que você quer executar. Da mesma forma, na programação, depois de criar uma função, é preciso chamá-la ou invocá-la para que ela execute a ação desejada. Sem o código que chama a função, ela não será ativada. Vamos praticar?

Exemplo:

function triplica(num) {
  return num * 3;
}
triplica(4); // chamando a função triplica, que retorna o valor do triplo do parâmetro 4
triplica(7); // chamando a função triplica, que retorna o valor do triplo do parâmetro 7

### 👨🏻‍💻 Hora de praticar

Chame a função dobro duas vezes
Uma vez, com o número 5
E outra vez, com o número 23.

### Testes
- Chame a função dobro passando 5 como parâmetro.
- Chame a função dobro passando 23 como parâmetro.

```
function dobro(numero) {
  return numero * 2;
}

dobro(5);
dobro(23);
```