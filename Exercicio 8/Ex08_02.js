const prompt = require ('prompt-sync')()

function ParImpar (n1) {
    if (n1 % 2 == 0){
        console.log('Ele é par');
        
    } else {
        console.log('ele é impar');
        
    }
    
}
ParImpar(4);
ParImpar(5);