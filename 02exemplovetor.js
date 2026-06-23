// ASSUNTO: VETORES 

//Vetor com nomes de alunos
let alunos = ["Ana","Bruno","Carlos","Diana"];

//Vetor com notas de alunos
let notas = [8.5 , 3, 8, 10]; 

console.log(alunos); //Exibe o valor do vetor todo
console.log(alunos [3]); //Diana
console.log(alunos [0]); //Ana

alunos[2] = "Antônio";
console.log(alunos); //vetor todo (agora c Antônio)

console.log(notas); 
console.log(notas [2]); 

//For para percorrer cada índice do vetor
for(let cont = 0 ; cont < 4; cont++) {
    console.log(`Nome: ${alunos[cont]} - Nota: ${notas[cont]}`);
}

console.log(alunos.length); //Tamanho do vetor: 4 

//Exemplo for clássico
for(let cont = 0 ; cont > alunos.length; cont++) {
    console.log(`aluno(a) ${cont + 1}: ${alunos[cont]}`);
}

//Exemplo com for of
for (let aluno of alunos) {
    console.log(`Nome: ${aluno}`);
}

//Exemplo foreach
//Aluno recebe o dado do vetor, indice recebe o indice do vetor.
//Estes parametros funcionam NESTA ORDEM. Não devem ser invertidos.
alunos.forEach(function(aluno, indice){
console.log(`índice: ${indice}, aluno: ${aluno}`);
});

//Métodos push, unsshift, pop e shift
//Push - adiciona ao final do vetor
alunos.push("Raimundo");
console.log(alunos);

//Pop - remove do final do vetor
alunos.pop();

//Unshift - adiciona ao ínicio do vetor
alunos.unshift("Raimundo");
console.log(alunos);    

//shift - removeu do ínicio do vetor
alunos.shift();
console.log(alunos);