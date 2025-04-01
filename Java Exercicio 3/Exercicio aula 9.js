const prompt = require('prompt-sync')()

let n1 = (prompt('Digite um numero:'))
switch (n1) {
    case "1":
        console.log('Domingo');
        break
    case '2':
        console.log('Segunda');
        break
    case '3':
        console.log('Terça');
        break
    case '4':
        console.log('Quarta');
        break
    case '5':
        console.log('quinta');
        break
    case '6':
        console.log('sexta');
        break
    case '7':
        console.log('sabado');
        break
}

let anoAtual = (prompt('Qual o ano?'))
let anoNascimento = (prompt('Qual o ano de nascimento?'))
let faixaEtaria = anoAtual - anoNascimento;

if (faixaEtaria < 10) {
    console.log('Criança');
} else if (faixaEtaria >= 11 && faixaEtaria < 17) {
    console.log("Adolescente");
} else if (faixaEtaria >= 18 && faixaEtaria < 59) {
    console.log('Adulto');
    } else if (faixaEtaria >= 60) {
        console.log('IDoso');
    }

    let n = (prompt('Digite um numero:'))
switch (n) {
    case "1":
        console.log('Janeiro');
        break
    case '2':
        console.log('Fevereiro');
        break
    case '3':
        console.log('Março');
        break
    case '4':
        console.log('Abril');
        break
    case '5':
        console.log('Maio');
        break
    case '6':
        console.log('Junho');
        break
    case '7':
        console.log('Julho');
        break
    case '8':
        console.log('Agosto');
        break
    case '9':
        console.log('Setembro');
        break
    case '10':
        console.log('Outubro');
        break
    case '11':
        console.log('Novembro');
        break
    case '12':
        console.log('Dezembro');
        break
}

let mes = prompt('Digite um mes:')
if (mes == 'janeiro' || mes == 'março' ||mes =='abril'||mes =='maio'||mes =='junho'||mes =='julho'||mes =='agosto'||mes =='setembro'||mes =='outubro'||mes =='novembro'||mes =='dezembro') {
    console.log(' tem 31 dias');
    
} else if ( mes =='fevereiro') {
    console.log('tem 28');
    
}

let nota1 = Number(prompt('Qual o nota?'))
let nota2 = Number(prompt('Qual o nota?'))
let media = (nota1 + nota2) / 2

if (media > 7 ){
    console.log('Aprovado');
    
}else if (media ==5 && media < 7 ) {
    console.log('Recuperaçao');
    
} else if (media < 5 ) {
    console.log('Reprovado');
    
}

let salario = Number(prompt('Qual o salario?'))
 
if (salario <= 2000 ){  
}