use('erp');
db.clientes.aggregate(
  [{ $match: { sexo: "MASCULINO" } }]
);
