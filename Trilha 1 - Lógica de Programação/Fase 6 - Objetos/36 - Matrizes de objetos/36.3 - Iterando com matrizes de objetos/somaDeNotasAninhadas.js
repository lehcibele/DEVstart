function obterSomaDeNotasAninhadas(estudantes) {
    let soma = estudantes.reduce(function(total, atual) {
      return total = total + atual.aprendizagemDeProgramacao.nota
    }, 0)
    return soma
}

// Não modifique as linhas abaixo
let estudantes = [
  {
    nome: "Diana Kelling",
    idade: 24,
    aprendizagemDeProgramacao: {
        anoInicio: 2020,
        nota: 8
    }
  },
  {
    nome: "Marcelo Kioski",
    idade: 31,
    aprendizagemDeProgramacao: {
        anoInicio: 2021,
        nota: 9
    }
  }
];

console.log(obterSomaDeNotasAninhadas(estudantes));