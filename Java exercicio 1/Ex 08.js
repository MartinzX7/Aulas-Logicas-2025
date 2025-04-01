const prompt = require('prompt-sync')();

let largura = Number(prompt("Qual a largura?"));
let altura = Number(prompt("Qual a altura?"));
let area = largura * altura;
console.log(`A área do retângulo é ${area}`);
