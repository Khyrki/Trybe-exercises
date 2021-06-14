use('erp');
db.clientes.aggregate(
  [
    {
      $group: {
        _id: {
          sexo:"$sexo",
          uf: "$endereco.uf"
        },
        count: { $sum: 1 }
      }
    }
  ]
);
