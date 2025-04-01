const prompt = require("prompt-sync")();

let num1 = Number(prompt('Qual o numero?'));
let sucessor = num1 + 1;
let antecessor = num1 - 1;
console.log(`${antecessor}, ${num1}, ${sucessor}`);

