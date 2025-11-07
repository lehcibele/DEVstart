function obterPrecoDoBilhete(idade) {
  if(idade <=18 || idade >= 60) {
    console.log((4000*50)/100)
    return (4000*50)/100
  } else {
    return 4000
  }
}

// Não modifique as linhas abaixo
console.log(obterPrecoDoBilhete(15)) // 2000
console.log(obterPrecoDoBilhete(30)) // 4000
console.log(obterPrecoDoBilhete(45)) // 4000
console.log(obterPrecoDoBilhete(75)) // 2000