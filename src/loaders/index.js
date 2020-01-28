const express = require('express');
const app = express();


const cookieParser = require('cookie-parser');
const BodyParser = require('body-parser');
const session = require('express-session');


try {
    const Models = require('../database/models/index');
    const errorCatcher = require('../middleware/error-handler');
    const passport = require('./passport');
    const routes = require('../routes/index');


    app.use(cookieParser());
    app.use(BodyParser.json());
    app.use(express.urlencoded({extended: true}));
    app.use(session({
        secret: 'SECRET',
        resave: true,
        saveUninitialized: false
    }));


    Models.init();
    app.use(passport);
    app.use(routes);
    app.use(errorCatcher);
} catch (error) {
    console.log(`${error} (index.js)`);
}

module.exports = app;