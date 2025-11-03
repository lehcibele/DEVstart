function exportarCSV(notas) {
  return notas.join(", ")
}

// Não modifique as linhas abaixo
console.log(exportarCSV([10, 15, 13, 19])) // "10, 15, 13, 19"
console.log(exportarCSV([7, 13, 20, 15])) // "7, 13, 20, 15"