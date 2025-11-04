function verificarPresencaCaractere(caracteres, caractere) {
  return caracteres.includes(caractere)
}

// Não modifique as linhas abaixo:
console.log(verificarPresencaCaractere(["A", "B", "C", "D"], "A")) // true
console.log(verificarPresencaCaractere(["A", "B", "C", "D"], "F")) // false
console.log(verificarPresencaCaractere(["A", "B"], "B")) // true
console.log(verificarPresencaCaractere(["A", "B"], "C")) // false