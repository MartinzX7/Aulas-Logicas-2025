const prompt = require('prompt-sync')();

let metros = Number(prompt('Quantos metros?'));
let centimetros = metros * 100;
let mm = metros * 1000;
let km = metros / 1000;
console.log(`os numeros serao: ${centimetros}, ${mm}, ${km}`);

