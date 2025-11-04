let notas = [10, 5, 15, 20]
// calcule o soma dessas notas com reduce

let soma = notas.reduce(function(total, atual) {
  return total + atual
}, 0)