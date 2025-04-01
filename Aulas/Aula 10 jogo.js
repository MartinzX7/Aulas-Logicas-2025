const prompt = require('prompt-sync')()

console.log('===========================');
console.log('🤨  JOGO DA ADIVINHAÇÃO  🤨');
console.log('===========================');

let num = Math.floor(Math.random() * 1000) + 1;
let acertou = false;
let tentativas = 0;

while (acertou == false) {
    let chute = Number(prompt('Digite um nº entre 1 e 1000: '));
    tentativas++
    if (chute == num) {
        console.log(`Parabens voce acertou em ${tentativas} tentaivas !!! `);
        acertou = true;
    } else if (chute > num) {
        console.log(`Voce chutou ${chute}, tente um numero menor`);

    } else if (chute < num) {
        console.log(`Voce chutou ${chute}, tente um numero maior`);

    }
}







