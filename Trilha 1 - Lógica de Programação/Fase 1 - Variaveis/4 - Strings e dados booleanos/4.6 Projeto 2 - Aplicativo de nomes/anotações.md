# Projeto 2 - Aplicativo de nomes

- Aplicativo de variações de nomes.

## Especificações do projeto
- O aplicativo informa quantos caracteres tem o nome.
- Como as letras ficam quando estão em maiúsculas.
- Como as letras ficam quando estão em minúsculas.

## Projeto 2 - Variações de nomes
Complete as funções fornecidas para que possamos simular algumas variações de nome.

Complete as funções que foram solicitadas.

### Testes 
- Complete a função obtenhaNumeroDeCaracteres(nome).
- Complete a função obtenhaNomeMinusculo(nome).
- Complete a função obtenhaNomeMaiusculo(nome).

```
function obtenhaNumeroDeCaracteres(nome) {
    // retorna o número de caracteres em: nome
    return nome.length;
}

function obtenhaNomeMinusculo(nome) {
    // retorna o nome todo em letras minúsculas (exemplo: "ABC" se torna "abc")
    return nome.toLowerCase();
}

function obtenhaNomeMaiusculo(nome) {
    // retorna o nome todo em letras maiúsculas (exemplo: "abc" se torna "ABC")
    return nome.toUpperCase();
}
```