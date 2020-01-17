const cookieParser = require('cookie-parser');
const app = require('../app');
const express = require('express');
const passport = require('../passport');
const session = require("express-session");
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

const sessionMiddleware = session({
    store: new RedisStore({client: redisClient}),
    secret,
    resave: true,
    rolling: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 10 * 60 * 1000,
        httpOnly: false,
    },
});

app.use(cookieParser());
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());


