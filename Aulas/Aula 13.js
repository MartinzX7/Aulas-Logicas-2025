const prompt = require('prompt-sync')()
// Interação sobre nossos vetores (arrays / listas)

let frutas = ['Maça', 'Banana', 'Abacaxi', 'Uva']
for (let x = 0;x < frutas.length; x++) {
    console.log(`A fruta da posição ${x} é ${frutas[x]}`);
    
}
console.log('FIM');

//Interando sobre ua listas usando o for of
let listaFut = ['Pelé', 'Maradona', 'Messi', 'Ronaldo'];
for (let jogador of listaFut) {
    console.log(`O jogador é ${jogador}`);
    
}
let numero = [1,2,3,4,5]
let soma = 0;
for ( let nr of numero){
    console.log(`O numero é ${nr}`)
soma = nr + soma
console.log(`A soma atual é ${soma}`);


}
  
//Verificando se um element existe em um array
let num = [' 1','2','3','4','5']
let vogais = ['a','e', 'i','o','u']
let consoantes = [ 'b', 'c', 'd', 'f', 'g']
let letraParaVerificar = prompt('Digite uma letra: ')
if (vogais.includes(letraParaVerificar.toLowerCase)) {
    console.log(`A letra ${letraParaVerificar} é uma vogal`);
    
} else if (consoantes.includes(letraParaVerificar.toLowerCase())) {
    console.log(`A letra ${letraParaVerificar} é uma consoante`);

} else if (num.includes(letraParaVerificar)) { 
console.log(` O numero ${letraParaVerificar} é um numero`);

}else {
    console.log(`A letra ${letraParaVerificar} não é uma letra e nem um numero `);

}

let listaFrutas = ['Maça', 'Banana', 'Abacaxi', 'Uva']
for (const [pos,fruta] of listaFrutas.entries()) {
    console.log( `A fruta da posição ${pos} é ${fruta}`);
    
}
let produtos = 'celular,note,tv'
let listasProdutos = produtos.split(',');
console.log( produtos);
console.log(listasProdutos);

let escola = 'SENAI'
for (const letra of escola) {
    console.log(letra);
}

















































































