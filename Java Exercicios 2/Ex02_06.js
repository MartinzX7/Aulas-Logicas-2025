const prompt = require('prompt-sync')();

let n1 = Number(prompt)('Digite um número: ');
let n2 = Number(prompt)('Digite outro número: ');
if (n1 != n2) {
    console.log(' Os números são diferentes.');
} else {
    console.log(' Os números são iguais.');
}
