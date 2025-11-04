function multipliqueNumeros(numeros) {
  let multiplicacao = numeros.reduce(function(total, atual) {
    return total * atual
  }, 1)
  return multiplicacao
}

// Não modifique as linhas abaixo:
console.log(multipliqueNumeros([10, 20, 30])) // 6000
console.log(multipliqueNumeros([2, 4, 2, 10])) // 160