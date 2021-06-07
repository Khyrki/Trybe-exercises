//Exercício 7 : Renomeie o campo budget para estimatedBudget do filme Batman .

use('class');
db.movies.update(
  { "title": "Batman" },
  { $rename: { "budget": "estimatedBudget" } },
);
