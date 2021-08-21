const express = require('express');
const app = express();
const bodyparser = require('body-parser').json();
const { Books } = require('./models');

app.use(bodyparser);

app.get('/books', async (req, res, next) => {
  const response = await Books.findAll()
  res.status(200).json(response);
});

app.post('/books', async (req, res, next) => {
  const { title, author, pageQuantity } = req.body;
  const response = await Books.create({ title, author, pageQuantity });
  res.status(200).json(response);
})

app.listen(3000, () => {
  console.log('Pai ta ON!');
});
