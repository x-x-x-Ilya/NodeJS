const express = require('express');
const app = express();

const parsers = require('./parsers');
const passport = require('./passport');
const Models = require('../database/models');
const errorCatcher = require('../middleware/error-handler');
const routes = require('../routes');

app.use(parsers);
app.use(passport);
Models.init();
app.use(routes);
app.use(errorCatcher);

module.exports = app;
