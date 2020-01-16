const cookieParser = require('cookie-parser');
const app = require('../app');
const express = require('express');
const passport = require('../passport');

app.configure(function () {
    app.use(express.static('public'));
    app.use(cookieParser());
    app.use(express.session({
        secret: 'keyboard cat'
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router());
});

