const express = require('express');

const router = express.Router()

const cepValidation = require('../service/cepService')
const getCepInfo = require('../controllers/cepController')

router.get('/cep/:cep', cepValidation,getCepInfo);

module.exports = router;