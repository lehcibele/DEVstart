// Classe Usuario
class Usuario {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    podeVotar() {
        return this.idade >= 16;
    }
}

// Implemente a classe Escritor
// Ela será filha da classe Usuario
class Escritor extends Usuario {
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome} [escritor]`
    }

    podeVotar() {
        return this.idade >= 16;
    }

    publicarArtigo() {
        return "Artigo publicado"
    }
}

// Testando a classe
let escritora = new Escritor ("Helena", "Silva", 22);
console.log(escritora.obterNomeCompleto());
escritora.publicarArtigo();