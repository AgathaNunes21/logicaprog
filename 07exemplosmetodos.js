class Pessoa {
    nome;
    idade;

//método construtor (ajuda criar os abjetos)
constructor(nome, idade) {
    this.nome = nome ;
    this.idade = idade;
}

//método comum
apresentar(){
   console.log(`óla, meu nome é ${this.nome}!`);
}
} //fim da classe Pesssoa 

// instanciando objeto usando construtor
let pessoa1 = new Pessoa("Roberto", 33);

console.log(pessoa1);

//método apresentar do apresentar da classe Pessoa 
pessoa1.apresentar()

