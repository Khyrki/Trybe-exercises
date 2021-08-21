const express = require('express');

const app =  express();

const http = require('http').createServer(app);

const port = 3000;

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }
});

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  return res.sendFile(__dirname + '/public/view/leilao.html')
})

const initialValue = {
  cellPrice: 0,
  tvPrice: 0,
  notebookPrice: 0,
}

io.on('connection', (socket) => {
  socket.emit('setInitialValues', initialValue)

  socket.on('lance', ({ value, name }) => {
    const newPrice = Number(value) + 5;
    initialValue[name] =  newPrice;
    io.emit('newPrice', { newPrice, name });
  })
});

http.listen(port, () => {
  console.log('App rodando na porta', port);
});
