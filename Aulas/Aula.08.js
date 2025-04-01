const prompt = require('prompt-sync')();
//Estrutura condicional composta e encadeada
//Operados Logicas
// && (E) - E se for verdadeiro, então o outro operando é avaliado
// || (OU) - Se um dos operadores for verdadeiro, o outro é avaliado
// ! (NÃO) - Inverte o valor do operador

let a = 2;
let b = 3;
let c = 5;
console.log(a > 2 && b < 2); // false
console.log(a > 1 && b < 2);  // false
console.log(a > 1 && b < 4);  // true
console.log(a > 1 && b < 4 && c > 4); //true  
console.log(a > 1 && b < 4 && c > 5);

console.log(a > 1 || b < 2); // true
console.log(a > 2 || b < 2);
console.log(a > 1 || b < 2);
console.log(a > 1 || b < 4);
console.log(a > 1 || b < 4 || c > 4);

let altura = Number(prompt('Qual a altura?'))
let peso = Number(prompt('Qual o peso?'))
let imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log('Abaixo do peso')
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log('Peso normal')
} else if (imc >= 25 && imc <= 29.9) {
    console.log('Sobrepeso')
} else if (imc >= 30) {
    console.log('Obesidade')
}

// exercicio
let lado1 = Number(prompt('Qual o lado 1 do triangulo?'))
let lado2 = Number(prompt('Qual o lado 2 do triangulo?'))
let lado3 = Number(prompt('Qual o lado 3 do triangulo?'))

if (lado1 == lado2 && lado2 == lado3 && lado3 == lado1) {
    console.log('Triangulo equilatero')
} else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
    console.log('Triangulo escaleno')
} else {
    console.log('Triangulo isosceles')
}
// exercicio
let vendas = Number(prompt('Toatal de vendas?'))
let horas = Number(prompt('Total de horas?'))
if (horas > 40 || vendas > 5000) {
    console.log('Desconto de 10%')
} else {
    console.log('Sem desconto')
}
// exercicio
let vogal = prompt('Qual a vogal?')
let consoante = prompt('Qual a consoante?')
if (volgal == 'a' || vogal == 'e' || vogal == 'i' || vogal == 'o' || vogal == 'u') {
    console.log('Vogal')
} else { console.log('Consoante') }

