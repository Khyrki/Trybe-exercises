const express = require('express');
const loginAuthMiddleware = require('../middleware/AuthMiddleware');

const app = express();

app.post('/', loginAuthMiddleware, (req, res, next) => {
  console.log("Fim do Programa")
  res.end();
})

module.exports = app;
