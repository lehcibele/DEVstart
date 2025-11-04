function obterUltimoItem(itens) {
  return itens[itens.length - 1]
}

// Não modifique as linhas abaixo:
console.log(obterUltimoItem(["Leite"])) // "Leite"
console.log(obterUltimoItem(["Tomate", "Queijo"])) // "Queijo"
console.log(obterUltimoItem([])) // undefined