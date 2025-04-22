const prompt = require('prompt-sync')()

function elevarQuadrado () {
    let A = ['1', '2', '3', '4', '5']
    let quadrado = [];
    for (let i = 0; i < A.length; i++) {
        quadrado.push(A[i] ** 2);
        console.log(`O quadrado de ${A[i]} é ${quadrado[i]}`);

    }
}
elevarQuadrado();