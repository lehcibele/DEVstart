function adicionarBanana(itens) {
  itens.push("Banana")
  return itens
}

// Não modifique as linhas abaixo:
console.log(adicionarBanana(["Leite"])) // ["Leite", "Banana"]
console.log(adicionarBanana(["Tomate", "Queijo"])) // ["Tomate", "Queijo", "Banana"]
console.log(adicionarBanana([])) // ["Banana"]