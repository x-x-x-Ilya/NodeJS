const express = require('express');

const loaders = require('./loaders/index');
const connect = require('./database/database');

const app = express();
module.exports = app;

const server = require('./server');

app.use(loaders);

connect.authentication();
connect.ModelsSynchronization();

server.start();
