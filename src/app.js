const express = require('express');
const app = express();
module.exports = app;

const loaders = require('./loaders/index');
const connect = require('./database/database');
const server = require('./server');

app.use(loaders);
connect.authentication();
connect.ModelsSynchronization();
server.start();