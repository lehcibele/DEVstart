function adicionarNota(notas, nota) {
    notas.push(nota)
    return notas
}

function obterTotalDeNotas(notas) {
  return notas.length
}

function obterPrimeiraNota(notas) {
  return notas[0]
}


function obterUltimaNota(notas) {
  return notas[notas.length - 1]
}

let teste = [5, 3, 10, 6, 8]
let n1 = 4
console.log(adicionarNota(teste, n1))
console.log(obterTotalDeNotas(teste))
console.log(obterPrimeiraNota(teste))
console.log(obterUltimaNota(teste))


