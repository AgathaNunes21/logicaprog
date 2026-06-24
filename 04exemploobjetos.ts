//declarando um objeto chamado aluno EM TYPESCRIPT
 let aluno:{nome: string; idade: number; ativo: boolean} = {
    nome: "João",
    idade: 21,
    ativo: true
};

console.log(aluno); //exibe o objeto completo

console.log(`Nome do aluno: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Situação: ${aluno.ativo}`);
if(aluno.ativo === true) {
    console.log(`situação: ativo`);
} else {
    console.log(`situação: inativo`);
}


    
