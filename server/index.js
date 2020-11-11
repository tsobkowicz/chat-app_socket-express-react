const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const router = require('./router');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(router);
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('We have a new connection');

  socket.on('disconnect', () => {
    console.log('User had left');
  });
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
