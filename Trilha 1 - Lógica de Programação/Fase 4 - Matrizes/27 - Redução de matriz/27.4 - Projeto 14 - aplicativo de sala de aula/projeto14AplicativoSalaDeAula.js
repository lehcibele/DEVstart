function adicionarNota(notas, nota) {
  notas.push(nota)
  return notas
}

function obterTotalDeNotas(notas) {
  return notas.length
}

function obterPrimeiraNota(notas) {
  return notas[0]
}

function obterUltimaNota(notas) {
  return notas[notas.length - 1]
}

function obterSomaDasNotas(notas) {
  let somaNotas = notas.reduce(function(total, atual) {
    return total + atual
  }, 0)
  return somaNotas
}

function obterMediaDasNotas(notas) {
  let somaNotas = obterSomaDasNotas(notas)
  return somaNotas / notas.length
}

function obterNotasAumentadasEm2(notas) {
  let notasAumentadasEm2 = notas.map(function(nota) {
    return nota + 2
  })
  return notasAumentadasEm2
}