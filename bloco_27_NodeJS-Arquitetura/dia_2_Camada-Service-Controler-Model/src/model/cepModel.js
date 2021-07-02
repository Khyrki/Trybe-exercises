const connection = require('./connection');

const findCepInfo = async (cep) => {
  const [cepInfo] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep =? ', [cep]
  )
  return cepInfo
}

module.exports = {
  findCepInfo,
}