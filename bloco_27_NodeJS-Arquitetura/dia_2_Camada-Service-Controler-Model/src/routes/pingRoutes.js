const express = require('express');
const sendPongMessage = require('../controllers/pingController')

const router = express.Router()

router.get('/ping', sendPongMessage);

module.exports = router;
