# ️️Classe com lista de cidades
Complete a classe ClimaDasCidades, implementando os seguintes métodos de instância:

obterPrimeiraCidade(), que retorna a primeira cidade da variável de instância cidades.
obterUltimaCidade(), que retorna a última cidade da variável de instância cidades.
exportarCSV(), que retorna uma string contendo o nome de cada cidade seguido pela temperatura naquela cidade (separada por um caractere de espaço). Essa string deve ser uma string CSV, o que significa que cada cidade e grupo de temperatura deve ser separado por uma vírgula e um caractere de espaço. Por exemplo: Florianópolis 25, São Paulo 30.
A a classe é inicializada com um argumento: a matriz cidades, contendo o boletim meteorológico de várias cidades.

Outro detalhe é que alguns itens dentro do objeto dados estão em inglês. Isso acontece porque se trata de um objeto produzido por um site externo, então fique atento para reproduzir o nome dos itens fielmente no seu código.

A sua solução do exercício deve começar pelo método construtor e, após ele, você criará os demais métodos. Exemplo:

class ClimaDasCidades {
    constructor(cidades) {
        this.cidades = cidades;
    }

    obterPrimeiraCidade() {
        return this.cidades[0];
    }

### Testes
- Implemente obterPrimeiraCidade()
- Implemente obterUltimaCidade()
- Implemente exportarCSV()
### Código

- [️️Classe com lista de cidades](./listaDeClimaDasCidades.js)