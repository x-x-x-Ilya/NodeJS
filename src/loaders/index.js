const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');




app.use(express.static("public"));
app.use(cookieParser());
app.use(bodyParser.json({ extended: false }));
const passport = require('../middleware/passport-middleware');
const session = require('express-session');
app.use(session({ secret: "cats", resave: true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());




    const Models = require('../database/models/index');
    const errorCatcher = require('../middleware/error-handler');
    const routes = require('../routes/index');

    Models.init();
/*
    app.use(express.static("public"));
    app.use(session({
        secret: 'SECRET',
        resave: true,
        saveUninitialized: false
    }));
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(express.urlencoded({extended: true}));
    app.use(passport.initialize());
    app.use(passport.session());
*/
    app.use(routes);
    app.use(errorCatcher);

module.exports = app;