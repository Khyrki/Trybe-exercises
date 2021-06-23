const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

app.get("/ping", (req, res) => {
  res.status(200).json({ "message": "pong" })
});

app.post("/hello", (req, res) => {
  const { name } = req.body;
  res.json({ "message": `Hello, ${name}!` })
});




app.listen(3000, () => {
  console.log("App rodando na porta 3000")
});
