let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
nome: 'Maria',
sobrenome: 'Silva',
idade: 34,
medalhas: {ouro: 2, prata: 3},
}
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(`A jogadora ${player['nome']} ${player['sobrenome']} tem ${player['idade']} anos de idade. Foi eleita a melhor do mundo por ${player['bestInTheWorld'].length} vezes. }`);
console.log(`A jogadora possui ${player.medalhas.ouro} medalhas de ouro e ${player.medalhas.prata} medalhas de prata.`)

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for(let key in names) {
    console.log('Olá, ' + (key));
  }