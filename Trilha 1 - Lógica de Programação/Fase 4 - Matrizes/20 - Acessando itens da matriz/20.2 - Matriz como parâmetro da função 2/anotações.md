# Matriz como parâmetro de função II

- Se você tentar acessar um item que não existe dentro da matriz, você obterá um dado do tipo undefined.

```
let notas = [10, 5, 7]
notas[3] // undefined
```

## Exercício - Obter nome completo

Complete a função obterNomeCompleto de forma que ela retorne o nome completo da pessoa.

Esse nome completo deverá ser composto pelos seguintes elementos, nesta ordem:

O primeiro nome, que é o primeiro item da matriz recebida como parâmetro.
Um caractere de espaço.
O sobrenome, que é o segundo item da matriz recebida como parâmetro.
Sinta-se livre para resolver o exercício usando a técnica que preferir.

Siga a dica a seguir.

### Testes
- Implemente a função obterNomeCompleto conforme especificado.

### Código 

- [Obter nome completo](./obterNomeCompleto.js)

## Exercício - Onde está a loja?

Complete a função localizacaoDaLoja() de forma que ela retorne a seguinte string:

"A loja está localizada em LAT, LON".

Detalhes:

O parâmetro coordenadas é uma matriz (array) contendo dois valores:

O primeiro item corresponde à latitude (LAT).

O segundo item corresponde à longitude (LON).

Requisitos:

Substitua LAT pelo valor presente no primeiro item da matriz coordenadas.

Substitua LON pelo valor presente no segundo item da matriz coordenadas.

### Testes
- Implemente a função localizacaoDaLoja().

### Código 

- [Onde está a loja?](./ondeEstaALoja.js)

## Exercício - Onde está a loja? 2

Complete a função localizacaoDaLoja() de forma que ela retorne a string:

"NOME localiza-se na LAT, LON"

Nessa string, devem acontecer as seguintes substituições:

NOME deve receber o nome da loja com o respectivo artigo (é o primeiro parâmetro da função).
LAT deve receber o primeiro item da matriz de coordenadas (essa matriz é o segundo parâmetro da função).
LON deve receber o segundo item da matriz de coordenadas.
Siga a dica a seguir.

### Testes
- Implemente a função localizacaoDaLoja().
### Código

- [Onde está a loja? 2](./ondeEstaALoja2.js)