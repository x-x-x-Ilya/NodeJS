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

/*const Models = require('./database/models/index');
const connect = require('./database/database');
const errorCatcher = require('./middleware/error-handler');
const routes = require('./routes/index');
const bodyParser = require('./loaders/express');

const app = express();

module.exports = app;


Middlewares, которые должны быть определены до passport:
const cookieParser = require('cookie-parser');
const BodyParser = require('body-parser');
app.use(cookieParser());
app.use(BodyParser.json());
app.use(express.urlencoded({extended: true}));
const session = require('express-session');
app.use(session({ secret: 'SECRET' ,
resave: true,
saveUninitialized: false}));
Passport:
const passport = require("passport");
app.use(passport.initialize());
app.use(passport.session());


const routes = require('./routes/index');

module.exports = app;

const server = require('./server');

const runApp = () => {
  try {
    connect.authentication();
    Models.init();
    connect.ModelsSynchronization();
    server.start();
   // app.use(bodyParser);
    app.use(routes);
    app.use(errorCatcher);
  } catch (err) {
    console.log(`${err} (app.js)`);
  }
};

runApp();
*/