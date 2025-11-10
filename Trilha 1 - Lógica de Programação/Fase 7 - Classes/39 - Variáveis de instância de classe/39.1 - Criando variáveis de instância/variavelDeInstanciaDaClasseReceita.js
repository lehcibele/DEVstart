// Definição da classe Receita com construtor e variáveis de instância
class Receita {
  constructor() {
    this.tempoDeCozimento = 30;
    this.alergias = ["nozes"];

    console.log(this.tempoDeCozimento);
    console.log(this.alergias[0]);
  }
}

// Uso da classe
let receita = new Receita();
console.log(receita);