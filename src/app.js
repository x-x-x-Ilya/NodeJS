const express = require('express');
const app = express();
module.exports = app;

const loaders = require('./loaders/index');
const database = require('./database/database');
const server = require('./server');

loaders(app);
database.authentication();
server.start();