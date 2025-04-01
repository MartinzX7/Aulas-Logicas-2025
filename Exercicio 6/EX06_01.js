let filmes = ['Gente Grande', 'Gente Grande 2', 'Flash', 'Suits', 'Peppa Pig', 'Ben 10', 'Clarencio']


console.log(filmes[0]);
console.log(filmes[4]);

filmes[6] = "Sonic"
console.log(filmes);

filmes.push('Batman');
filmes.splice(5,0, 'Bad Boys');
console.log(filmes)

filmes.shift()
console.log(filmes);

filmes.pop()
console.log(filmes);

console.log(filmes.slice (0, 4));

console.log(filmes.slice(-4));

filmes.reverse()
console.log(filmes);






