const prompt = require("prompt-sync")();

let nota1 = Number(prompt('Qual a nota?'));
let nota2 = Number(prompt('Qual a nota?'));
let media = (nota1 + nota2) / 2;
console.log(`Qual a nota final: ${media}`);

