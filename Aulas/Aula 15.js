function nomeEscola(){
    let escola =  'SESI'
    console.log(`Valor dentro da funçao: ${escola}`);
    
}
let escola = 'SENAI'
console.log(`Valor fora da funçao: ${escola}`);
nomeEscola()
console.log(`Valor após a funçao: ${escola}`);

//utilizando variavel local
var escola2 = 'SENAI'

function NomeEscola2(){
    console.log(`Valor dentro da função : ${escola2}`);
}
escola2 = 'SENAI'
console.log(`Valor fora da função: ${escola2}`);
NomeEscola();
console.log(`Valor após a função: ${escola2} `);


//documetando funções usando o JSDoc
/**
 *  Soma de dois numeros
 * @param {number} a - primeiro numero
 * @param {number} b - segundo numero
 * @returns {number} - soma dos dois numeros
 */
function Soma(a, b){


}
Soma()
