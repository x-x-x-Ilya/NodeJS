const Models = require('./database/models/index');
const connect = require('./database/database');
const error_catcher = require('./middleware/error-handler');
const routes = require('./routes/index');
const bodyParser = require('./loaders/express');

let express = require('express');
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
        app.use(error_catcher);
    } catch (err) {
        console.log(err + " Error app cannot start(app.js)");
    }
};

runApp();