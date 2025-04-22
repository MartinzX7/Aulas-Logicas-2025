const prompt = require('prompt-sync')()

let dinheiro = Number(prompt('Digite quanto voce ganha: '))
let horas = Number(prompt('Digite quantas horas voce trabalha: '))
let salarioPorHora = dinheiro * horas;
console.log(`Seu salário por hora é: R$ ${salarioPorHora}`)