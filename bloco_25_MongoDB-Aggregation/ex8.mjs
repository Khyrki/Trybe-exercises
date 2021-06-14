use('erp');
db.vendas.aggregate(
  [
    {
      $match: {
        status: { $in: ["EM SEPARACAO", "ENTREGUE"] }
      }
    },
    {
      $group: {
        _id: "$clienteId",
        valorTotal: {
          $sum: "$valorTotal"
        }
      }
    },
    {
      $sort: {
        valorTotal: -1
      }
    },
    {
      $limit: 5
    }
  ]
);
