function receberSaudacaoPorPeriodoDoDia(hora) {
  if(hora < 12) {
    return "Bom dia"
  } else if( hora < 20) {
    return "Boa tarde"
  } else {
    return "Boa noite"
  }
}

//Não modifique as linhas abaixo
console.log(receberSaudacaoPorPeriodoDoDia(11)) // "Bom dia"
console.log(receberSaudacaoPorPeriodoDoDia(12)) // "Boa tarde"
console.log(receberSaudacaoPorPeriodoDoDia(14)) // "Boa tarde"
console.log(receberSaudacaoPorPeriodoDoDia(22)) // "Boa noite"
