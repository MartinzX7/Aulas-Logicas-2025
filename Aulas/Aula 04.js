const prompt = require('prompt-sync')();


//Criando a primeira variavel
//Uma variavel serve para armazenar uma informaçao/valor
//O memoria crie um espaço com o nome curso e receba o valor "Desenvolvimento de Sistemas"
var curso = "Desenvolvimento de Sistemas";

console.log('curso');
console.log(curso);
console.log('curso' , curso);

//Criando e atribuindo valores de uma variavel
var idade = 17;//inteira //int
var temperatura = 24.5;// real //float
var nome = "martins";//string

console.log('Olá,', nome ,'você tem', idade, 'anos');
console.log('eatá cursando', curso, 'hoje faz', temperatura, 'ºC');


console.log('Olá,'+ nome +'você tem'+ idade+ 'anos');
console.log('eatá cursando'+ curso+ 'hoje faz'+ temperatura+ 'ºC');

console.log(`Olá, ${nome} você tem ${idade} anos
    está cursando ${curso} hoje faz ${temperatura}ºC`);


    //Declarando uma variavel logica/boolean
    var podeDirigir = true;
    var estaChovendo = false;

    //Declarando uma variavel nula
    var escola;

    //Exercicio
    //Nota1: valido
    //nomeCompleto: valido
    //Nome Completo: invalido
    //Média: invalido
    //console: invalido
    //_salario: valido
    //9dade: invalido
    //Minha_Vatriavel: valido
    //var: invalido
    //valor$: invalido
    //nome-completo: invalido
    //escola_: valido
    //TELEFONE: valido
    //true: invalido
    let cidade = 'Andradina'
    var turma = '2º'
    const ano = 2025

    console.log(turma);
    turma = '3Bº'
    console.log(turma);

    let _nome = 'martinz rlk'
let _idade = 17
let _peso = 58.6
console.log(`${_nome}, ${_idade}, ${_peso}`);

_nome = prompt('Qual é o nome?');
_idade = prompt('Qual a idade?'); 
_peso = prompt('Qual é o peso?');
console.log(_nome, _idade, _peso);

//Criem duas variaveis num1 e num2 e recebam as infomacoes pelo prompt
var num1;
var num2;
num1 = prompt('digite o primeiro numero');
num2 = prompt('digite o segundo numero');
console.log(num1+num2);
console.log(typeof num1);
num1 = Number(num2);
console.log(typeof num1);

let nr1 = Number(prompt('Digite um numero:'));
let nr2 = Number(prompt('Digite um numero:'));
console.log(nr1 + nr2);

nr1 = '100.14'; //string
nr1 = Number(100.14); //Number
nr1 = parseInt('100.14'); 
nr1 = parseFloat('100');
nr1 = String(100.14);

_nome = prompt('Qual é o nome?');
_idade = parseInt(prompt('Qual a idade?'));
_peso = parseFloat(prompt('Qual é o peso?'));
console.log(_nome, _idade, _peso);

//Exercicios Variaveis

var nome_do_aluno = 'martinz'
var altura = 1.76;
var escola = 'SESI';
var ano_atual = '2ºB';ns

//Exercicio 2

let nome_prof = 'Douglas'
let materia_do_prof = 'Desenvolvimento de sistemas'
let ano_ingresso_do_prof ='2023'






