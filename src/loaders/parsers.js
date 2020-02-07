const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.json({ extended: false }));

module.exports = app;