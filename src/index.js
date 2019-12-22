require("./database/sequelize");

let app = require('./app');
let http = require('http');
let database = require("./database/database");

let onListening = (() => {
  let addr = server.address();
  let bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  console.log('Listening on ' + bind);
});

let normalizePort = ((val) => {

  let port = parseInt(val, 10);

  if (isNaN(port)) { return val;}

  if (port >= 0) { return port;}

  return false;
});

let port = normalizePort(process.env.PORT || '3000');
let server = http.createServer(app);

server.listen(port);app.set('port', port);
server.on('listening', onListening);


database.authentication;
database.synchronization;