//Exercício 5 : Aumente em 5 o budget do filme Home Alone .

use('class');
db.movies.update(
  { "title": "Home Alone" },
  { $inc: { "budget": 5 } },
);
