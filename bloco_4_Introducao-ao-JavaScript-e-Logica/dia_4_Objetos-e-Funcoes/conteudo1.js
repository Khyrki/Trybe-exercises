let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    gold: 2,
    silver: 3
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

console.log ('A jogadora',player.name,player.lastName,'tem',player.age,'anos de idade.');
console.log ('A jogadora',player.name,player.lastName,'foi eleita a melhor do mundo por',player.bestInTheWorld.length,'vezes.')
console.log ('A jogadora',player.name,player.lastName,'possui',player.medals.gold,'medalhas de ouro e',player.medals.silver,'meldalas de prata.')
