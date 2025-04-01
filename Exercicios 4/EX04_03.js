const prompt = require('prompt-sync')()

let par = 0;
let impar = 0;
while (true) {
    let valor = Number(prompt('Digite o valor do produto:'))
    if (valor % 2 == 0) {
        par++
   } else {
        impar++
    }
}
console.log(` O valor par é: ${par}`)
console.log(` O valor impar é: ${impar}`)

