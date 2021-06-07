//Exercício 8 : Utilize o operador $min para alterar o budget para 5 do filme Home Alone .

use('class');
db.movies.update(
  { "title": "Home Alone" },
  { $min: { "budget": 5 } },
);
