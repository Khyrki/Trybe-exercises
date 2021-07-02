const cepValidation = (req, res, next) => {
  const { cep } = req.params;
  const cepRegex  = /\d{5}-?\d{3}/;
  if(!cepRegex.test(cep)) {
    return res.status(400).json({ message: 'CEP inválido'} )
  }
  return next();
}

module.exports = cepValidation;
