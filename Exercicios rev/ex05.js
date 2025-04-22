const prompt = require('prompt-sync')()

let letra = prompt('Digite uma letra: ')

if (letra == 'F'){
    console.log('Feminino');
    
} else if (letra == 'M') {
    console.log('Masculino');
}