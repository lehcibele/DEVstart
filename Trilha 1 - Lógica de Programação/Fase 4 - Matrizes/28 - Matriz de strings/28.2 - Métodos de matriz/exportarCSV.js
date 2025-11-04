function exportaCSV(usuarios) {
  return usuarios.join(", ")
}

// Não modifique as linhas abaixo
console.log(exportaCSV(["Alice", "Bruno", "Sara", "Augusto"])) // "Alice, Bruno, Sara, Augusto"
console.log(exportaCSV(["Samuel", "Alexandre", "Carla"])) // "Samuel, Alexandre, Carla"