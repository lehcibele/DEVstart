function pegueNome(nome) {
    let nomeAlterado = nome
    nomeAlterado = nomeAlterado.trim()
    nomeAlterado = nomeAlterado.toUpperCase();

    return nomeAlterado;
}

// Exemplo de uso - não modifique
console.log(pegueNome(" bruno"))
console.log(pegueNome(" alex  "))