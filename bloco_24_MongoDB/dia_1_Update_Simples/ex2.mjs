//Exercício 2 : Altere budget para 1 no filme Godzilla .

use('class');
db.movies.update(
  { "title": "Godzilla" },
  { $set: { "budget": 1 } },
);