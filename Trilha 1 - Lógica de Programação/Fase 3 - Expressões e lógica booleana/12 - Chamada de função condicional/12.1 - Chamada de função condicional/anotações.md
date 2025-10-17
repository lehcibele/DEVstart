# Chamada de função condicional

- Você pode chamar funções dentro de condicionais if.

```
function dobro() {
    console.log("O número será dobrado)
}

function executar(operacao) {
    if(operacao === "dobro") {
        return dobro()
    } 
}

executar("dobro")
```

## Exercício - Chamada de função condicional

Conclua a função executar() de forma que ela chame a função dobro() quando o parametro operacao recebido tiver o valor "dobro".

Crie uma condição em que, se a operação for igual a "dobro", a função a ser executada será dobro().

### Testes
- Chamar a função dobro() após a função executar() receber o parâmetro "dobro".
- Qualquer outra função não será chamada.

### Código

- [Chamada de função condicional](./chamadaDeFuncaoCondicional.js)