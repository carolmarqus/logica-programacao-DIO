class Heroi2 {
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
      return `O ${this.tipo} atacou usando ${this.ataque}`;
    }
  }
  
  let mago = new Heroi2("YoonSeok", 32, "mago");
  console.log(mago.atacar());

  let guerreiro = new Heroi2("BaeHae", 67, "guerreiro");
  console.log(guerreiro.atacar());

  let monge = new Heroi2("OhEui", 24, "monge");
  console.log(monge.atacar());

  let ninja = new Heroi2("JoYoung", 95, "ninja");
  console.log(ninja.atacar());
 
