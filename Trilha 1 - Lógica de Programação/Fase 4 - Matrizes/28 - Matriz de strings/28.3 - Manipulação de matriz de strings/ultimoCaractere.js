function obterUltimoCaractere(nomes) {
  let ultimoCaractere = nomes.map(function(nome) {
    return nome[nome.length - 1]
  })

  return ultimoCaractere
}

// Não modifique as linhas abaixo
console.log(obterUltimoCaractere(["Alice", "Bruno", "Samuel", "Augusto"])) // ["e", "o", "l", "o"]
console.log(obterUltimoCaractere(["samara", "alexandre", "carla"])) // ["a", "e", "a"]