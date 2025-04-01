const prompt = require('prompt-sync')()
//Operadores relacionais 
// == igualdade
// != diferente de
// > maior que
// < menor que
// >= maior ou igual a
// <= menor ou igual a
//Exemplo de uso dos operadores relacionais


let a = 2;
let b = 3;
console.log(a > b); // false
console.log(a < b); // true
console.log(a == b); // false
console.log(a != b); // true
console.log(a >= b); // false
console.log(a <= b); // true

//if estrutura de condiçao muito utilizado
let tenhoIngresso = true;
if(tenhoIngresso==true){
    console.log('Posso entrar no show');
    };          
if(tenhoIngresso==false){
    console.log('Não posso entrar no show');
    };          

    let idade = Number(prompt('Qual a sua idade?'));
    if(idade >= 18){
        console.log('Você é maior de idade');
    }

    let tenhoIngresso_ = false;
    if(tenhoIngresso_==true){
        console.log('Posso entrar no show');
        } else {
            console.log('Não posso entrar no show');
        }

    let Idade = Number(prompt('Qual a sua idade?'));
    if (Idade >= 18){
        console.log('Voce é maior de idade');
        } else {
            console.log('Voce nao pode dirigir');
        }
