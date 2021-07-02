const { findCepInfo } = require('../model/cepModel')

const getCepInfo = async (req, res, next) => {
  const { cep } = req.params;

  const result = await findCepInfo(cep);

  if(result.length === 0) {
    return res.status(404).json({ "error": { "code": "notFound", "message": "CEP não encontrado" } })
  }
  
  return res.status(200).json({ result })
};

module.exports = getCepInfo;