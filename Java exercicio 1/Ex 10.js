const prompt = require('prompt-sync');

let km = Number(prompt('Quantos voce percorreu?'));
let dias = Number(prompt("Quantos dias voce alugou"));
let valorDias = dias * 60;
let valorKm = (km * 0.15)
let total = valorDias + valorKm;
console.log(`O valor total a ser pago é de R$ ${total}`);