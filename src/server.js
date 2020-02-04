const app = require('./app');

const normalizePort = ((val) => {
  const port = parseInt(val, 10);

  if (port >= 0)
    return port;

  return false;
});

const port = normalizePort(process.env.PORT || '3000');

exports.start = () => {
  app.listen(port);
  console.log('Listening on port', port);
  app.set('port', port);
};
