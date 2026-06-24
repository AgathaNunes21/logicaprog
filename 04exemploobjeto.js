//declarando um objeto chamado aluno
let aluno = {
    nome: "João",
    idade: 20,
    ativo: true
};

console.log(aluno); //exibe o objeto completo

console.log(`Nome do aluno: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Situação: ${aluno.ativo}`);
if(aluno.ativo === true) {
    console.log(`Situação: ativo`);
} else {
    console.log(`situação: inativo`);
}

//exemplo notaçaõ de conchetes 
let propriedade = "nome";

console.log(aluno[propriedade]); //João 

//também funciona diretamente
console.log(aluno["idade"]); //20

//declarando novo objeto
let produto = {
    nome: "notebook",
    preco: 3000
};
console.log(produto);
//modificando o preço do notebook
produto.preco = 2800;
console.log(produto);

//adicionar uma nova propriedade ( uma nova chave)
produto.estoque = 15;
console.log(produto);





