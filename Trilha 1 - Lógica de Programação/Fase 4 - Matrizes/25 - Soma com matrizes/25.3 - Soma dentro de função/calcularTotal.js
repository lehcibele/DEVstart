function calcularTotal(numeros) {
  let total = 0
  numeros.forEach(function(numero) {
    total = total + numero
  })
  return total
}

// Não modifique as linhas abaixo
console.log(calcularTotal([10, 20, 10])) // deveria ser 40
console.log(calcularTotal([5, 7, 3, 9])) // deveria ser 24
console.log(calcularTotal([])) // deveria ser 0