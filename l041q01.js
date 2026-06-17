//Desenvolver um programa que pergunte um número. Se este número for maior que 20, então ele deverá exibir a
//metade deste número, senão, ele deverá exibir o número sem alterações.

let num, metade;
console.log("informe o número: ");
num = 20; //exemplo de número informado pelo usuário

if (num >= 20 ) {
    metade = num / 2;
    console.log(`A metade de ${num} é ${metade}`);
} else {
    console.log (`O número inserido foi ${num}`);
}

console.log("FIM DO PROGRAMA");


