function obtenhaNumeroDeCaracteres(nome) {
    // retorna o número de caracteres em: nome
    return nome.length;
}

function obtenhaNomeMinusculo(nome) {
    // retorna o nome todo em letras minúsculas (exemplo: "ABC" se torna "abc")
    return nome.toLowerCase();
}

function obtenhaNomeMaiusculo(nome) {
    // retorna o nome todo em letras maiúsculas (exemplo: "abc" se torna "ABC")
    return nome.toUpperCase();
}

console.log(obtenhaNumeroDeCaracteres("enZO"))
console.log(obtenhaNomeMinusculo('enZO'))
console.log(obtenhaNomeMaiusculo("enZO"))