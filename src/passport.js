const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('./database/models/user');

passport.use(new LocalStrategy(
    {
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

//req.user.id

passport.deserializeUser(function(id, done) {
    User.findOne({where: {id}}).then((user) => {
        done(null, user);
        return null;
    });
});
