const net = require('net');

const port = 2500;

const sockets = [];

const bradcastMessages = (message) => {
  sockets.forEach((socket) => {
    socket.write(message);
  });
};

const server = net.createServer((socket) => {
  sockets.push(socket)

  socket.write('conectado');

  socket.on('data', (data) => {
    bradcastMessages(data)
  });
});



server.listen(port, () => {
  console.log('Processo rodando na porta', port);
});