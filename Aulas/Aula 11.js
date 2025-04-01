const prompt = require('prompt-sync')()

for (let x = 1; x <= 5; x++) {
    console.log(x);
    
}
for (let i = 5; i <= 800; i+= 3) {
    console.log(i);
    
}

for (let y = 1; y <= 100000000000000; y++) {
    console.log(y);
    if ( y == 10000000000000) {
        break;
    }
        
}

console.log('Etregando os notebooks');
for (nr = 1; nr <= 32; nr++) {
    let nome = prompt(`Quem é o nº${nr}: `)
    let presente = prompt(` O(A) ${nome} esta presente (S ou N)`);

    if (presente == 'S') {
        console.log(`pegar o notebook ${nr}`);
        console.log(`levar o notebook ate o(a) ${nome}`);
        
        
    }
}

let n = 7;
for (let contador = 1; contador = 10; contador++){
    console.log(`${n} x ${contador} = ${n} * ${contador}`);
    
}