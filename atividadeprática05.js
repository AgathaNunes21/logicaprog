function saudacaopersonalizada (nome) { //nome é LOCAL
    return `Ola, ${nome}! Seja bem-vindo(a).`
}
console.log(saudacaopersonalizada("Carlos"));

let nome = "Ana"; //var GLOBAL
console.log(saudacaopersonalizada("ana"));