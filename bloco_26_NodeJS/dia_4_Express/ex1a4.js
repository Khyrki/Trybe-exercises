const express = require('express')

const app = express();

app.use(express.json())

app.get("/ping", (req, res) => {
  res.status(200).json({ "message": "pong" })
});

app.post("/hello", (req, res) => {
  const { name } = req.body;
  res.json({ "message": `Hello, ${name}!` })
});

app.post("/greetings", (req, res) => {
  const { name, age } = req.body;
  if(age > 17) {
    res.status(200).json({ "message": name });
  } else {
    res.status(401).json({ "message": "Unauthorized" });
  }
  
});

app.put("/users/:name/:age", (req, res) => {
  const userInfo = req.params;
  res.json({ "message": `Seu nome é ${userInfo.name} e você tem ${userInfo.age} anos de idade` })
});




app.listen(3000, () => {
  console.log("App rodando na porta 3000")
});
