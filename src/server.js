const http = require('http');

const app = require('./app');

const normalizePort = ((val) => {
  const port = parseInt(val, 10);

  if (port >= 0) {
    return port;
  }

  return false;
});

const port = normalizePort(process.env.PORT || '3000');

const server = http.createServer(app);

const onListening = (() => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
});

exports.start = () => {
  server.listen(port);
  server.on('listening', onListening);
  app.set('port', port);
};
