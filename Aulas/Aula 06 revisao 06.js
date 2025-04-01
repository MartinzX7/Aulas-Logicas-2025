const prompt = require('prompt-sync')();

// Declarando variavel sem dados
let nota;
//Declarando variavel com informaçao 
let nome = 'Carlos';

//Reatribuindo um valor á variavel nome
nome = 'roberto';
nota = 8.5;

let sobrenome = prompt("Digite seu sobrenome:");
let nota1 = Number (prompt("Digite a nota da primeira prova:"));
let nota2 = Number (prompt("Digite a nota da primeira prova:"));

//Processamento dos dados
let media = (nota1 + nota2) / 2;
let nomeCompleto = nome + '' + sobrenome;
let idade = prompt("Digite sua idade:");
let idade1 = parseInt(idade);

//saida dos dados
console.log('---Relatorio Final---');
console.log(`O seu nome é: ${nomeCompleto} \n sua idade ${idade}`);
console.log(`Sua média é: ${media}`);

let n = 0;
n = 0 + 1;
n = n + 1;
n = n + 1;
n += 1;
n++;
n += 3;
n--;
n -= 2;



