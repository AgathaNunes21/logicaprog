//Crie um array com exatamente 5 números inteiros e exiba todos
//os elementos no console. Tente as três formas de iteração.

for (let i = 0; i < numeros.length; i++) {
console.log("Índice " + i + ": " + numeros[i]);
}
for (let num of numeros) {
console.log(num);
}
numeros.forEach((num, i) => {
console.log(`Posição ${i}: ${num}`);
});