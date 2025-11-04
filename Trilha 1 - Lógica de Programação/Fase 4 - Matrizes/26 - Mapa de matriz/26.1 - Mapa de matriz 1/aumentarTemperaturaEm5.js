function aumentarTemperaturasEm5(temperaturas) {
  let aumentarEm5 = temperaturas.map(function(temperatura) {
    return temperatura + 5
  })

  return aumentarEm5
}

// Não modifique as linhas abaixo
console.log(aumentarTemperaturasEm5([-5, 12, -15, 18, 13])) // [0, 17, -10, 23, 18]
console.log(aumentarTemperaturasEm5([5, 20, 10])) // [10, 25, 15]