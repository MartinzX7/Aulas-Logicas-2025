const prompt = require('prompt-sync')()

function tabuada (n) {
    for (let x = 1; x <= 10; x++ ){
    console.log(`${n} x ${x} = ${n*x}`);
    
    }
}
tabuada(3)
tabuada(10)
tabuada(7)