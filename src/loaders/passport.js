const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require("passport");

// Middlewares, которые должны быть определены до passport:
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: 'SECRET',
    resave: true,
    saveUninitialized: false }));
// Passport:
app.use(passport.initialize());
app.use(passport.session());

/*const cookieParser = require('cookie-parser');
const BodyParser = require('body-parser');
const session = require('express-session');
const passport = require("passport");

app.use(cookieParser());
app.use(BodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'SECRET',
    resave: true,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport);
*/
module.exports = app;