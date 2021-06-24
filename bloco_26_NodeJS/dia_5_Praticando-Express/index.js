const express = require('express');
const bodyParser = require('body-parser')
const loginRoute = require('./exercicio1/rotas/routeLogin');

const app = express();

const PORT = 3000;

app.use(bodyParser.json())

app.use('/login', loginRoute)

app.listen(PORT, () => {
  console.log("App rodando na porta 3000")
});
