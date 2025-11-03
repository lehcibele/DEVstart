function obterSomaDeTodasAsNotas(notas) {
  let soma = 0
  notas.forEach(function(nota) {
    soma = soma + nota
  })
  return soma
}

function obterMediaDeTodasAsNotas(notas) {
  let resuladoSoma = obterSomaDeTodasAsNotas(notas)
  return resuladoSoma/notas.length
} 