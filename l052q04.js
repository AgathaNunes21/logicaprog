//Desenvolver um programa que apresente os resultados de uma tabuada de um número n qualquer a ser
//perguntado ao usuário (n x 1, n x 2, n x 3, ... , n x 9, n x 10)

let n; 
let cont = 0;
let mult;

console.log("informe um número:");
n = 5;
console.log(`número informado: ${n}`);

do {
mult = n * cont;
console.log(`${n} x ${cont} = ${mult}`);
cont = cont + 1; // outras opções: cont += 1, cont ++
} while ( cont <=10);





