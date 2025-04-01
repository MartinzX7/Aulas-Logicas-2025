const prompt = require('prompt-sync')()
let qntdPar = 0
let qntdImpar = 0
let somaPar = 0
let somaImpar = 0
for (let nr = 1; nr <= 5; nr++) {
    let valor = Number(prompt('Digite um valor: '))
    if (valor % 2 == 0) {
        qntdPar += 1
        somaPar += valor
    } else {
        qntdImpar += 1
        somaImpar += valor
    }

}
console.log('Quantidade de números pares: ' + qntdPar)
console.log('Quantidade de números impares: ' + qntdImpar)
console.log('Soma dos números pares: ' + somaPar)
console.log('Soma dos números impares: ' + somaImpar)