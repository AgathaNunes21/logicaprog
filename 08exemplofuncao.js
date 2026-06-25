//meterial 08 (Modularização e Funções) - página 06
//variável GLOBAL
let num;

function somar (a,b) {
//resultado -> variável LOCAL 
    let resultado = a + b;
    return resultado;
}
direcionador();

//exibindo imediatamnete o valor retornado pela função
console.log(somar(5, 3));

//guardando o valor retornado em uma variváel
num = somar (10, 20);
console.log(num);

 somar(4,5); //o retorno da função se perde

//função sem return (função void)
 function direcionador(){
    console.log("sigam em frente! Estude sempre!");
 }
//chamando a função direcionador();
 direcionador();
 direcionador();

 let cont; //global
 for (cont = 0; cont <= 3; cont++
    console.log(cont);
 )
console.log(cont); //deu bom, pq é global

 let texto = direcionador();
console.log(texto); //variável não recebe retorno da função.

function mensagem(){
    return "Ame mais, brigue menos!";
}
//chamando a função mensagem();
mensagem (); //perdi o retorno da função
console.log(mensagem());

function tudao(){
    console.log("início da função tudao()");
    direcionador(); //chamando a função direcionador
    let calc = somar(2, 3);
    console.log(`resultado da soma ${calc}`);
    let msg = mensagem ();
     direcionador(); 
    console.log(`mensagem do dia: ${msg}`);
    console.log("fim da função tudao()");
}
 
tudao(); //chamando a função tudão
