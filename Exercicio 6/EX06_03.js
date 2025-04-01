const prompt = require('prompt-sync')()

let comidas = []
for (let i = 1; i <= 6; i++) {
    let comida = prompt(`Digite o nome da comida ${i}: `)
    comidas.push(comida)
}