const prompt = require('prompt-sync')();

let preco = Number(prompt("Qual o preço do produto? "));
let desconto = (5/100) * preco;
let precoFinal = preco - desconto;
console.log(`O preço final do produto é R$ ${precoFinal}`);         
