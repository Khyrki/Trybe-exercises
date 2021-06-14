use('erp');
db.clientes.aggregate(
  [
    {
      $match: {
        "endereco.uf": "SC"
      }
    },
    {
      $group: {
        _id: "SC",
        count: { $sum: 1 }
      }
    }
  ]
);
