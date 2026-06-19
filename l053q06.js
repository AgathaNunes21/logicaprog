//Desenvolver um programa que apresente o valor de uma potência de uma base qualquer elevada a um expoente
//qualquer, ou seja, de be
//, onde os valores de b e e são fornecidos pelo usuário, sem utilizar Math.pow().

let base; 
let exp; 
let acum = 1; // começa valendo 1 pois será ultilizado em multiplicação

console.log("infome o valor da base da potência:");
base = 2;
console.log("informe o valor do expoente da potência");
exp = 4;
console.log(`valores inseridos:base: ${base}, expoente ${exp}`);

for (let cont = 1; cont <= exp ; cont ++ ) {
    acum = acum * base;

    console.log(`${base} elevado a ${exp} = ${acum}`)
}

