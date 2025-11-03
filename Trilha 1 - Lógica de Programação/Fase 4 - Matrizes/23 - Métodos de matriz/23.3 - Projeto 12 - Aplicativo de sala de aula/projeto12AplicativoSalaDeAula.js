function adicionarNota(notas, nota) {
  notas.push(nota)
  return notas
}

function obterNumeroDeTestes(notas) {
  return notas.length
}

function obterPrimeiraNota(notas) {
  return notas[0]
}

function obterUltimaNota(notas) {
  return notas[notas.length - 1]
}

function aProvaEhMuitoFacil(notas) {
  return notas.includes(20)
}

function aNotaExiste(notas, nota) {
  return notas.includes(nota)
}

function exportarCSV(notas) {
  return notas.join(", ")
}