const prompt = require('prompt-sync')();

//Operacoes com variaveis

let num1 = 25;
let num2 = 15;
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let exponenciacao = num1 ** num2;
console.log(soma, subtracao, multiplicacao, divisao, exponenciacao);

//Exercicio do celular
var valor_celular = prompt('qual o valor do celular?');
var desconto_celular = prompt('qual o valor do desconto?');
valor_celular =  valor_celular - (valor_celular * desconto_celular / 100 )
console.log(`valor do celular sera ${valor_celular}`);

var _numero = 4 / 2;
_numero = _numero ** 2;
_numero = _numero * (50 - 20);
console.log(`o valor é: ${_numero}`);


//Execicio 
let numero = Number(prompt('qual é o numero?'))
let dobro = numero * 2
let metade = numero / 2
console.log(`valor final é igual a ${numero}`);


//exercicio

let dias = 15
let horas_por_dia = 8
let horas = dias * horas_por_dia
let valorFinal = horas * 100
console.log(`valor final é igual a ${valorFinal}`);

//Resoluçao da aula anterior



