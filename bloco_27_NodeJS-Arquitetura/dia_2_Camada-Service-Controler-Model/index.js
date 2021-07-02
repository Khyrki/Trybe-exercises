const express = require('express');
const { pingRoutes, cepRoutes } = require('./src/routes/index')

const bodyParcer = require('body-parser');

const app = express();

app.use(bodyParcer.json());

app.use(pingRoutes);
app.use(cepRoutes);

app.listen(3000, () => {
  console.log('Pai ta ON!');
});
