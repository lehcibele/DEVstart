# Por que os objetos são importantes?

- Os objetos são importantes porque eles representam e descrevem um determinado objeto, elemento, entidade, pessoa etc.
- Os valores dentro do objeto podem ser de vários tipos:
    - número, strings, booleano etc.
- Caso o valor seja uma string, você pode aplicar métodos de string nele, como **.toUpperCase()**, **.toLowerCase()**.

## Exercício - Obter nome completo com interpolação de strings
Complete a função obterNomeCompleto() de forma que ela retorne o nome completo do usuário.

O nome completo é composto pelo primeiro nome, seguido por um caractere de espaço e pelo sobrenome.

Tente retornar o nome completo através de interpolação de strings.

### Testes
- Implemente a função obterNomeCompleto().

### Código

- [Obter nome completo com interpolação de strings](./obterNomeCompleto.js)

## Exercício - Obter nome completo formatado com concatenação de strings
Preencha a função obterNomeCompletoFormatado(), de forma que ela retorne o nome completo do usuário, mas com o sobrenome todo em letras maiúsculas.

Assim sendo, o primeiro nome deve estar seguido pelo sobrenome (todo em maiúsculas) e eles devem estar separados por um caractere de espaço.

Tente retornar o nome completo formatado através de interpolação de strings.

### Testes
- Implemente obterNomeCompletoFormatado()

### Código

- [Obter nome completo formatado com concatenação de strings](./obterNomeCompletoUsandoConcatenacao.js)

## Exercício - Obter iniciais com interpolação de strings
Complete a função obterIniciais(), de forma que ela retorne as iniciais do usuário.

Por exemplo, se o nome do usuário for "Sara Buarque", a função deve retornar "SB".

Tente retornar as iniciais utilizando a técnica de interpolação de strings.

### Testes
- Implemente a função obterIniciais().

### Código

- [Obter iniciais com interpolação de strings](./obterIniciais.js)

## Exercício - Simulando a leitura de uma API real
Complete a função obterDescricaoPessoal() de forma que ela retorne uma string que descreva a pessoa que ela recebe.

A string deve ter este formato:

"X1 (X2) é um X3 que vive em X4 com X5 seguidores."

Substitua:

X1 pelo nome da pessoa
X2 pelo id da pessoa
X3 pela biografia da pessoa
X4 pela localização da pessoa
X5 pelo número de seguidores da pessoa
Obs: o objeto person com o qual estamos trabalhando reproduz os dados que são retornados pela API do Github.

Atenção: Não faça hardcode.

Perceba que não traduzimos o objeto nem as suas propriedades. Isso acontece porque, como se trata de uma simulação de leitura da API do Github, a nossa resposta viria toda em inglês.

### Testes
- Implemente a função obterDescricaoPessoal().

### Código

- [Simulando a leitura de uma API real](./simulandoLeituraDeApi.js)