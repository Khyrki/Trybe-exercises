const express = require('express');
const loginAuthMiddleware = require('../middleware/AuthMiddleware');

const app = express();

app.post('/', loginAuthMiddleware, (req, res, next) => {
  console.log("entrou na roda")
  res.end();
})

module.exports = app;
