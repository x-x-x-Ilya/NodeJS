const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('../database/models/user');

passport.use(new LocalStrategy({
        usernameField: 'login',
        passwordField: 'password'
    },
    function (login, password, done) {
        User.findOne({username:login},
            function (err, user) {

                if (err) {
                    return done(err);
                }

                if (!user) {
                    return done(null, false,
                        {message: 'Incorrect username or password.'});
                }

                if (!user.validPassword(password)) {
                    return done(null, false,
                        {message: 'Incorrect   username or password.'});
                }

                return done(null, user);
            });
    }));

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(id, done) {
    User.findOne({where: {id}}).then((user) => {
        done(null, user);
        return null;
    });
});

//module.exports = router;

//req.user.id
/*
router.post('/login', passport.authenticate('local', {
        session: true,
        successRedirect: '/',
        failureRedirect: '/login',
    }),
    function (req, res) {
        res.redirect('/' + req.user.username);
    });
*/

/*
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
*/

