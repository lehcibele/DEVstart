function somaNotasIguaisOuAcimaDe6(notas) {
  let soma = 0
  notas.forEach(function(nota) {
    if(nota >= 6) {
      soma = soma + nota
    }
  })
  return soma
}

// Não modifique as linhas abaixo
somaNotasIguaisOuAcimaDe6([10, 5, 18, 3, 14, 19, 9]) // deveria retornar 70
somaNotasIguaisOuAcimaDe6([18, 4, 9, 20, 8]) // deveria retornar 55