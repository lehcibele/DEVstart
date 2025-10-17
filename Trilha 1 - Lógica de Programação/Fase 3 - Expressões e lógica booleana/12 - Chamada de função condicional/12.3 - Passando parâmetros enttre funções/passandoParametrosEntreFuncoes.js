function dobro(x) {
    return x * 2
}

function executar(operacao, numero) {
    if (operacao === "dobro") {
        return dobro(numero)
    }
}

// Exemplos de uso - não modifique
console.log(executar("dobro", 4)) // deve retornar 8
console.log(executar("dobro", 5)) // deve retornar 10