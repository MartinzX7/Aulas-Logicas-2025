const prompt = require('prompt-sync')()

function saudacao() {
    let nome = prompt('Digite um nome: ')
    console.log(`Tenha um bom dia ${nome}`);

}

saudacao();

