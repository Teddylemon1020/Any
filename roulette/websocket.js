let activeSockets = 0;
const MAX_CONNECTIONS = 5;

io.on('connection', (socket) => {
  if (activeSockets >= MAX_CONNECTIONS) {
    socket.disconnect();
    console.log('User limit reached, connection refused.');
  } else {
    activeSockets++;
    socket.on('disconnect', () => {
      activeSockets--;
    });
  }
});

//for amount of player