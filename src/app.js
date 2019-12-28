const Models = require('./database/models/index');
const connect = require('./database/database');
const router = require('./routes/user');

let express = require('express');
const app = (module.exports = express());

const server = require('./server');

const runApp = () => {
    try {
        connect.authentication();
        Models.init();
        connect.ModelsSynchronization();
        server.start();
        app.get('/', function (req, res) {
            return  res.status(201).json("main trying");
        });

        app.use('/user', router);

    } catch (err) {
        console.log(err + " Error app cannot start(app.js)");
    }
};

runApp();