function nomesEmMaiusculas(nomes) {
  let nomesMaiusculas = nomes.map(function(nome) {
    return nome.toUpperCase()
  })
  return nomesMaiusculas
}

// Não modifique as linhas abaixo
console.log(nomesEmMaiusculas(["Alice", "Bruno", "Samuel", "Augusto"])) // ["ALICE", "BRUNO", "SAMUEL", "AUGUSTO"]
console.log(nomesEmMaiusculas(["samuel", "alice", "cARLa"])) // ["SAMUEL", "ALICE", "CARLA"]