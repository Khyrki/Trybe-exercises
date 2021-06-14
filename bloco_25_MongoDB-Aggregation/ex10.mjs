use('erp');
db.vendas.aggregate(
  [
    {
      $group: {
        _id: "$clienteId",

        count: {
          $sum: 1
        }
      }
    },
    {
      $match: {
        count: { $gte: 5 }
      }
    },
    {
    $group: {
      _id: null,
      clientes: { $sum: 1 }
    }
    },
    { 
      $project: { _id: 0 }
    }
  ]
);
