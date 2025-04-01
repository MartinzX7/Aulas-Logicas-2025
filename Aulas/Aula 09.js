//Estrutura Condicionais aninhadas
//Switch Case
const prompt = require('prompt-sync')()

let valoCompra = 900;
let clienteVIP = true;

if (valoCompra >= 100) {
    if (clienteVIP == true) {
        console.log(`Voce ganhou R$ ${valoCompra * 0.9}`);

    } else {
        let desconto = valoCompra * 5 / 100;
        console.log(`Voce ganhou R$ ${desconto} de desconto`);

    }
} else {
    let restante = 100 - valoCompra
    console.log(`Compre, mais R$ ${restante} e ganhe desconto`);
}
let idade = prompt('Qual sua idade?');

if (idade < 16) {
    console.log("Não pode votar");
} else if (idade > 16 && idade < 18) {
    console.log("Voto Facultativo");
} else if (idade >= 18 && idade <= 70) {
    console.log("Voto obrigatorio");
} else if (idade > 70) {
    console.log("Voto Facultativo");
}

let n1 = Number(prompt("Digite um numero:"))
let n2 = Number(prompt("Digite um numero:"))
let op = prompt("Digite o operador (+ - / * **)")

switch (op) {
    case '+':
console.log(n1 + n2);
break
case '-':
    console.log(n1 - n2);
    break
    case '/':
        console.log(n1 / n2);
        break
        case '*':
            console.log(n1 * n2);
            break
            case '**':
                console.log(n1 ** n2);
                break
}