const express = require('express');
const app = express();

const passport = require('../middleware/passport-middleware');
const session = require('express-session');
app.use(session({ secret: 'cats', resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

module.exports = app;
