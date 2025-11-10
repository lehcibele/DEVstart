function obterSomaDasNotas(estudante) {
    // Soma usando reduce
    // let somaDasNotas = estudante.notas.reduce(function(total, atual) {
    //     return total + atual
    // }, 0);
    // return somaDasNotas;

    let somaDasNotas = 0;

    estudante.notas.forEach(function(nota) {
        somaDasNotas = somaDasNotas + nota
    })

    return somaDasNotas;

}

// Não modifique as linhas abaixo
let estudante = {
    nome: "Evandro Carneiro",
    idade: 16,
    notas: [3, 5, 5, 4, 8]
};

console.log(obterSomaDasNotas(estudante));