# Método .join()

- O método **.join()** converte a matriz em uma string.
- Na string retornada pelo .join(), os caracteres passados como parâmetros são inseridos entre os itens da matriz.
- CSV significa Comma Separated Values, ou valores separados por vírgula. Trata-se de uum formato de arquivo que pode ser importado pelo Excel.

```
let numeros = [3, 1, 6]
let string = numeros.join(";"); // "3;1;6"
```

- Utilizações:
    - Converter uma matriz para o formato CSV

```
let numeros = [3, 1, 6]
let csv = numeros.join(", ") // "3, 1, 6"
```

## Exercício - Converter para formato CSV
Complete a função converterParaFormatoCSV() de forma que ela retorne uma string gerada a partir da matriz notas que ela recebe como parâmetro.

A string deve ser composta por todos os itens da matriz separados pelo caractere ; (ponto-e-vírgula).

Siga a descrição.

### Testes
- Implemente converterParaFormatoCSV().

### Código 

- [Converter para formato CSV](./converterParaCSV.js)

## Exercício - Juntar com e comercial
Complete a função juntarComEComercial() de forma que ela retorne uma string gerada a partir da matriz notas que ela recebe como parâmetro.

Observe o exemplo de uso para ver o formato esperado da string.

Siga a descrição.

### Testes
- Implemente a função juntarComEComercial().

### Código 

- [Juntar com e comercial](./juntarComEComercial.js)

## Exercício - Exportar CSV
Complete a função exportarCSV() de forma que ela retorne uma string CSV da matriz notas que ela recebe como parâmetro.

Siga a descrição.

### Testes
- Implemente a função exportarCSV().

### Código

- [Exportar CSV](./exportarCSV.js)
