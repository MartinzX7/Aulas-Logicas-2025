const prompt = require("prompt-sync")()

let resposta = "S";
if (resposta == "S") {
    console.log('Voce esta dentro do bloco');
}

let resposta1 = 'S'

while (resposta1 == 'S') {
    console.log("Voce esta dentro do Bloco");
    resposta1 = prompt('Deseja continuar? S/N')
}

let senhaSecreta = 'SENAI'
let senhaDigitada
while (senhaSecreta != senhaDigitada) {
    console.log('Descubra a senha secreta!');
    senhaDigitada = prompt('Digite a senha')
}
console.log("FIM");

//exemplo 3
let contador = 1;
while (contador <= 10000) {
    console.log(`O contador esta no nº ${contador}`);
    contador++ //contador  = contador + 1;
}

// exemplo 4

let total = 0;
let qtde = 0;
while (true) {
    let valor = Number(prompt('Digite o valor do produto:'))
    if (valor == 0) {
        break;
    } else {
        total = valor + total;
        qtde++;
    }
}
console.log(` Voce comprou no total ${qtde}`);
console.log(`Voce comprou no total ${total} de produtos`);


