class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    if (this.tipo === "mago") {
      this.ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      this.ataque = "espada";
    } else if (this.tipo === "monge") {
      this.ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      this.ataque = "shuriken";
    }
    return this.ataque;
  }
}

let mago = new Heroi("Soojun", 221, "mago");
console.log(`O ${mago.tipo} atacou usando ${mago.atacar()}`);

let guerreiro = new Heroi("SeoHu", 537, "guerreiro");
console.log(`O ${guerreiro.tipo} atacou usando ${guerreiro.atacar()}`);

let monge = new Heroi("ShinMin", 164, "monge");
console.log(`O ${monge.tipo} atacou usando ${monge.atacar()}`);

let ninja = new Heroi("LeeSang", 395, "ninja");
console.log(`O ${ninja.tipo} atacou usando ${ninja.atacar()}`);
