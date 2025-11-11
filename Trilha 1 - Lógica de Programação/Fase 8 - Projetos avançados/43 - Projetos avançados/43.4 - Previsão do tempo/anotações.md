# Previsão do tempo

- Entidades HTML:
    - &deg; (simbolo do grau em HTML)

## Exercício - Aplicativo de previsão do tempo
Complete a classe Temperatura com os seguintes métodos de instância:

obterLocalizacao(), de forma que retorne o nome da cidade seguido por uma vírgula, um caractere de espaço e o nome do país. Por exemplo: Florianópolis, Brasil
obterIcone(), de modo que retorne o ícone que representa o clima.
obterTemperatura(), de modo que retorne a temperatura seguida do símbolo de grau (use uma entidade HTML que é &deg;) e seguida do caractere C (para Celsius). Por exemplo, 10°C (mas você tem que usar a entidade HTML acima.
Lembre-se que o console.log() é seu amigo! Ele permitirá que você visualize a estrutura do objeto com o qual está trabalhando. Veja que o objeto com o qual você deve trabalhar neste exercício é o dadosDoClima.

Se perceber que há tudo o que precisa em dadosDoClima. Vai ver que o ícone se encontra lá também. Para acessá-lo é simples: dadosDoClima.current.weather_icons. Ele é um endereço eletrônico que será o src da tag img.

Note que a classe é inicializada com um argumento: o objeto de detalhes contendo os dados meteorológicos.

Portanto:

crie um método construtor que faça essa inicialização.
Outro detalhe é que alguns itens dentro do objeto dadosDoClima estão em inglês.
(Isso acontece porque se trata de um objeto produzido por um site externo, então fique atento para reproduzir o nome dos itens fielmente no seu código).

### Testes
- Implemente obterLocalizacao()
- Implemente obterIcone()
- Implemente obterTemperatura()
### Código

- [Aplicativo de previsão do tempo](./previsaoDoTempo.js)