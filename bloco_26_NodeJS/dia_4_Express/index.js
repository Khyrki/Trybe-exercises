const express = require('express')

const app = express();

app.get("/ping", (req, res) => {
  res.status(200).json({ "message": "pong" })
});

app.post("/hello", (req, res) => {
  res.json({ "message": "Hello, khyrki!" })
});




app.listen(3000, () => {
  console.log("App rodando na porta 3000")
});
