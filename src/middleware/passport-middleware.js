const User = require('../database/models/user');
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(
   /* {
        email: 'login',
        password: 'password'
    },*/
    async function (username, password, done) {
        User.findOne({
                where: {
                    email: username
                },
            },
            function (err, user) {

                if (err) {
                    return done(err);
                }

                if (!user) {
                    return done(null, false,
                        {message: 'Incorrect username or password.'});
                }

                if (password !== user.password) {
                    return done(null, false,
                        {message: 'Incorrect username or password.'});
                }

                return done(null, user);
            });
    }));

passport.serializeUser(function(user, done) {
    done(null, user.id/*user*/);
});

passport.deserializeUser(function(id, done) {
    User.findOne({where: {id:id}}).then((user) => {
        done(null, user);
        //return null;
    });
});

module.exports = passport;
/*
function login(req, res, next) {
    passport.authenticate('local',
        function(err, user, info) {
            return err
                ? next(err)
                : user
                    ? req.logIn(user, function(err) {
                        return err
                            ? next(err)
                            : res.status(404).json('it is OK')//res.redirect('/private');
                    })
                    : res.status(404).json('User not founded')//res.redirect('/');
        }
    )(req, res, next);
}
*/
//module.exports = router;

//req.user.id


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

