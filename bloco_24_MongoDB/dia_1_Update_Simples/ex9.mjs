//Exercício 9 : Utilize o operador $max para alterar o imdbRating para 8.6 do filme Godzilla . Além disso, altere a categoria "adventure" para "thriller" do filme Godzilla .

use('class');
db.movies.update(
  { "title": "Godzilla" },
  {
    $max: { "imdbRating": 8.6 },
    $set: { "category": ["action", "thriller", "sci-fi"] }
  },
);