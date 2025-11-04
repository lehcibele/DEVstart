function nomesEmMinusculas(nomes) {
  let nomesMinusculas = nomes.map(function(nome) {
    return nome.toLowerCase()
  })
  return nomesMinusculas
}

// Não modifique as linhas abaixo
console.log(nomesEmMinusculas(["Alice", "Bruno", "Samuel", "Augusto"])) // ["alice", "bruno", "samuel", "augusto"]
console.log(nomesEmMinusculas(["SAMARA", "ALEXANDRE", "CARLA"])) // ["samara", "alexandre", "carla"]