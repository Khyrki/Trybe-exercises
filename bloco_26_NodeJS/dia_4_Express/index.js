const express = require('express')
const getSimpsons = require('./service/requisicao');

const app = express();

app.use(express.json())

app.get("/simpsons" , async (req, res, next) => {
  const reponse = await getSimpsons();
  if(reponse.error) {
    next(reponse);
  }
  res.status(200).json(reponse);
});

app.get("/simpsons/:id", async (req, res, next) => {
  const id = req.params;
  const reponse = await getSimpsons();
  const filteredResponse = reponse.find((element) => element.id === id.id);
  if(!filteredResponse) {
    next({ error: "Not Found", code: 404  });
  }
  res.status(200).json(filteredResponse);
})

app.use((error, req, res, next) => {
  res.status(error.code).json({ "mensage": error.error })
})

app.listen(3000, () => {
  console.log("App rodando na porta 3000")
});
