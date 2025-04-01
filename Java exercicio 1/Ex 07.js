const prompt = require('prompt-sync')();
let reais = Number(prompt('Quanto de dinheiro que voce tem?'));
let dolar = reais / 5.79;
console.log(`Quantos dolares: ${dolar.toFixed(2)}`);
