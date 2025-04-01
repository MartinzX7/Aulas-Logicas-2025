const prompt = require('prompt-sync')();

let numero = Number(prompt('Qual o numero?'))
if (numero <0) {
    console.log('O numero é negativo')
} else {
    console.log('O numero é positivo')
}
