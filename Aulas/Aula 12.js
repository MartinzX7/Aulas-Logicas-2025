//Variaveis Comppostas / Vetores

let fruta = ' Maça'
fruta = 'Banana'

let frutas = ['Maça' , 'Banana', 'Abacaxi' , 'Uva']

console.log(frutas);
console.log(frutas[3]);

//Declarando uma lista vazia 
let listaVazia = []


//
let numeros = [1, 2, 3, 4, 5, 6]

//lista mista
let mista = [4, 'feijao' , true , 7.33]

let listaVetores = [['coca-cola', 'hot dog'], [5.00, 10.00]]

frutas [3] = 'Melancia'
console.log(frutas);

frutas [4] = 'Laranja'
console.log(frutas);

frutas =[...frutas, 'morango']
console.log(frutas);

frutas.splice(2,0,'kiwi')
console.log(frutas);

frutas = ['Maça', 'Banana', 'Morango', 'Abacaxi', 'Melancia', 'Laranja', 'Uva']
console.log(frutas[4]);
console.log(frutas.slice(0,4));
console.log(frutas.slice(1));
console.log(frutas.slice(-1));
console.log(frutas.length);