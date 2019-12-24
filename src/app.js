//const DB = require('./database/sequelize');
const Models = require('./database/models/index');
const connect = require('./database/database');
const server = require('./server');
const router = require('./routes/user');

let express = require('express');

const app =  express();
module.exports = app;
//const app = require('./server');

const runApp = () => {
    try {
        connect.authentication();
        Models.init();
        connect.ModelsSynchronization();
        server.start();
        //app.use(router);

    } catch (err) {
        console.log(err + " Error app cannot start(app.js)");
    }
};

runApp();