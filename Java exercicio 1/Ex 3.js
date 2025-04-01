const prompt = require("prompt-sync")();
 
let num1 = Number(prompt('Qual o numero?'));
let dobro = num1 * 2;
let triplo = num1 * 3;
let cubo = num1 **3;
console.log(`O resultados das equaçoes sera: ${dobro}, ${triplo}, ${cubo}`);

