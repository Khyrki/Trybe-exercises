//Exercício 12 : Utilizando uma única operação, remova os campos budget e estimatedBudget em todos os documentos.

use('class');
db.movies.updateMany(
  {},
  {
    $unset: { "budget": '', "estimatedBudget": '' },
  },
);
