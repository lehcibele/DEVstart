# Sintaxe da condicional if

```
function podeVotar(idade) {
    if(idade >= 16) {
        return true
    }
}
```

## Exercício - Votação Brasileira
Que tal, agora, você montar a sua condição if para uma votação? Levaremos em consideração que, aos 16 anos, o cidadão brasileiro já tem direito a votar.

Desta vez, você deverá completar o método podeVotar() de forma que ele retorne true quando a idade for 16 anos ou mais. Preste atenção na sintaxe e tente escrever você mesmo, sem usar suas anotações dessa vez.

Crie a condição if dentro do método podeVotar().

### Testes
- Complete a função podeVotar() com uma condição if.
- Se chamar o método podeVotar() com o parâmetro 10, ele retornará undefined como resposta.
- Se chamar o método podeVotar() com o parâmetro 20, ele retornará true como resposta.
- Se chamar o método podeVotar() com o parâmetro 55, ele retornará true como resposta.

### Código

- 🔗 [Votação Brasileira](./votacaoBrasileira.js)

## Exercício - É positivo?
Complete a função ePositivo com uma condição if que retorne true quando o número for positivo. Note que o número 0 também pode ser considerado positivo.

Implemente a função ePositivo()

### Testes 
- A condição if deve ser implementada corretamente.
- Se chamar o método ePositivo(0), ele retornará true como resposta.
- Se chamar o método ePositivo(-980), ele retornará undefined como resposta.
- Se chamar o método ePositivo(), com o parâmetro 1 ou qualquer número maior do que este, ele retornará true como resposta.

### Código 

- 🔗 [É Positivo ?](./ehPositivo.js)