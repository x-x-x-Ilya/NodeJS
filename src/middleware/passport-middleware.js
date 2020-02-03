const User = require('../database/models/user');
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;


passport.use(new LocalStrategy(
    function(username, password, done) {
        console.log('sdasdasdad');
        try {
            // console.log('1username =', username);// заходит в этот код
            // console.log('1password =', password);// заходит в этот код
            User.findOne({username: username}, function (err, user) {
                console.log('User.findOne');
                if (err) {
                    console.log(err);
                    return done(err);
                }
                if (!user) {
                    return done(null, false);
                }
                //if (password !== user.password) { return done(null, false); }
                // console.log('2username =', username);//не заходит в этот код
                // console.log('2password =', password);//не заходит в этот код
                // console.log('2user =', user); //не заходит в этот код
                return done(null, user);
            });
        } catch (e) {
            console.log(e);
            return e;
        }
    }
));

/*
passport.use(new LocalStrategy(
{
    username: 'username',
    password: 'password'
},
function(username, password, done) {
    const user = User.findOne({
            where:{email: username},*/
        /*}).then((user) => {
            if (!user) {
                return done(null, false,
                    {message: 'Incorrect username or password.'});
            }
                if (password !== user.password) {
                    return done(null, false,
                        {message: 'Incorrect username or password.'});
                }
                return done(null, user);
        }).catch((err) => {
            if (err) {
                return done(err);
            }
        });
    }
));*/

  /*      },
        function (err, user) {    // не заходит в эту функцию
            console.log(user.get({plain: true}));
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
    }
));
*/

/*{
        email: 'login',
        password: 'password'
    },*/


passport.serializeUser(function(user, done) {
    done(null, user.id/*user*/);
});

passport.deserializeUser(function(id, done) {
    User.findOne({id:id}).then((user) => {
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

