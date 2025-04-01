const prompt = require('prompt-sync')();

let nota = Number(prompt('Qual a nota?'));
if (nota >= 7) {
    console.log('Aprovado');
}
else (nota < 7)
{
    console.log('Reprovado');
};
