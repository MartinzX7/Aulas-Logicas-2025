const prompt = require('prompt-sync')()
let idadeSomaM= 0;
let qntdM = 0;
let idadeSomaF= 0;
let qntdF = 0;
for (let x = 1; x <= 10; x++){
    let idade = Number(prompt('Qual sua idade?'))
    let sexo = prompt('Qual seu sexo')
 if (sexo == 'M') {
     qntdM++
    idadeSomaM = idadeSomaM + idade 
} else if (sexo == 'F')
    qntdF++
    idadeSomaF = idadeSomaF + idade


}

console.log(`A media do grupo M é de ${idadeSomaM / qntdM}`);
console.log(`A media do grupo F é de ${idadeSomaF / qntdF}`);
console.log(`A media do grupo é de ${idadeSomaM + idadeSomaF / 10}`);
