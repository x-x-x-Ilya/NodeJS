const bodyParser = require('body-parser');
let express = require('express');

const app =  express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

module.exports = app;