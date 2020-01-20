const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser);

module.exports = app;
