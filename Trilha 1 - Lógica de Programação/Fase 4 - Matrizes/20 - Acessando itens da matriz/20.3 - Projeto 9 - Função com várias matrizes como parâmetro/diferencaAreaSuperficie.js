function calcularDiferenca(primeiroRetangulo, segundoRetangulo) {
    console.log("Primeiro Retângulo", primeiroRetangulo)
    console.log("Segundo Retângulo", segundoRetangulo)

    let area1 = primeiroRetangulo[0] * primeiroRetangulo[1]
    let area2 = segundoRetangulo[0] * segundoRetangulo[1]

    let diferencaAreas = area1 - area2

    return diferencaAreas
}