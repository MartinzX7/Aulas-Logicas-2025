const prompt = require('prompt-sync')();

let num1 = Number(prompt('Qual o primeiro número?'));
let num2 = Number(prompt('Qual o segundo número?'));
if (num1 > num2) {
    console.log(`${num1} é maior que ${num2}.`);
} else (num1 < num2);
console.log(`O primeiro número é maior que o segundo número.`);
