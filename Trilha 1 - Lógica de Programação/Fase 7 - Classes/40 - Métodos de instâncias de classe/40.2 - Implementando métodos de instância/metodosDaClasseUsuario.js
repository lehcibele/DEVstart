// Definição da classe
class Usuario {
    /* 
        Implemente os métodos: 
        1. constructor 
        2. obterNomeCompleto 
        3. obterIniciais 
        4. podeVotar
    */
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }

    obterIniciais() {
        return `${this.nome[0]}${this.sobrenome[0]}`
    }

    podeVotar() {
        return this.idade >= 16;
    }
}

// Uso da classe
let sara = new Usuario("Sara", "Gomes", 17);
let cesar = new Usuario("César", "Assis", 13);
console.log(sara.obterNomeCompleto())
console.log(sara.obterIniciais())
console.log(sara.podeVotar())
console.log("---");
console.log(cesar)