const prompt = require('prompt-sync')()

function formatarData (dia,mes,ano) {
    let formatado = (`${dia}/${mes}/${ano}`)
    return formatado
}
let data = formatarData('01,07,2008')
console.log(data);

console.log(formatarData(19,12,2008));
