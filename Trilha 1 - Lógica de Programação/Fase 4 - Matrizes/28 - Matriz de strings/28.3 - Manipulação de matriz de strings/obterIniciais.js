function obterIniciais(nomes) {
  let iniciais = nomes.map(function(nome) {
    return nome[0]
  })

  return iniciais
}

// Não modifique as linhas abaixo
console.log(obterIniciais(["Alice", "Bruno", "Samuel", "Augusto"])) // ["A", "B", "S", "A"]
console.log(obterIniciais(["samara", "alexandre", "carla"])) // ["s", "a", "c"]