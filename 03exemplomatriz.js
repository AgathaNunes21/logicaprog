//lete matriz = [[1,2],[3,4]];
let matriz = [
    [1,2],
    [3,4]
];
//matriz com 5 linhas e 5 colunas 
let letras = [
    ["a","b","c","d"],
    ["e","f","g","h"],
    ["i","j","k","l"],
    ["m","n","o","p"],
    ["q","r","s","t"],
];

console.log(matriz);
console.log(letras);

//exibição dos valore da matriz letras usando for
for(let linha = 0 ; linha < 5 ; linha++) {
    for(let col = 0 ; col < 4 ; col ++) {
        console.log(letras[linha][col]);
    }
}