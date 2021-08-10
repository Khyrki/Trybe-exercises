const net = require('net');

const client = new net.Socket();

const stdin = process.openStdin();

client.connect(2500, 'localhost', () => {
  stdin.addListener('data', (data) => {
    const message = data.toString().trim();
    client.write(message);
  })
});

client.on('data', (data) => {
  console.log(data.toString('UTF-8'))
})
