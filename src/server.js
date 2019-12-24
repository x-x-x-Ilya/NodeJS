let http = require('http');

let express = require('express');
const app =  express();
//const app = require('./app');

let server = http.createServer(app);

//module.exports = app;

let normalizePort = ((val) => {
    let port = parseInt(val, 10);
    if (isNaN(port)) { return val;}
    if (port >= 0) { return port;}
    return false;
});

let port = normalizePort(process.env.PORT || '3000');

let onListening = (() => {
    let addr = server.address();
    let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
});

exports.start = () => {
    server.listen(port);
    server.on('listening', onListening);
    app.set('port', port);
};