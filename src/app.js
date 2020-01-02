const express = require('express');
const Models = require('./database/models/index');
const connect = require('./database/database');
const errorCatcher = require('./middleware/error-handler');
const routes = require('./routes/index');
const bodyParser = require('./loaders/express');

const app = (module.exports = express());

const server = require('./server');

const runApp = () => {
  try {
    connect.authentication();
    Models.init();
    connect.ModelsSynchronization();
    server.start();
    app.use(bodyParser);
    app.use(routes);
    app.use(errorCatcher);
  } catch (err) {
    // console.log(`${err} Error app cannot start(app.js)`);
  }
};

runApp();
