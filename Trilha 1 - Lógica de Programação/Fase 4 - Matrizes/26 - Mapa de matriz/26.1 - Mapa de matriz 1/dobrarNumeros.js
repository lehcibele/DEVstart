function dobreNumeros(numeros) {
  let dobrar = numeros.map(function(numero) {
    return numero * 2
  })
  return dobrar
}

// Não modifique as linhas abaixo
console.log(dobreNumeros([10, 20])) // [20, 40]
console.log(dobreNumeros([5, 12, 20, 10])) // [10, 24, 40, 20]