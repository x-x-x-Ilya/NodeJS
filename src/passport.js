const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('./database/models/user');

passport.use(new LocalStrategy(
    function (usernameField, passwordField, done) {
    User.findOne({username:usernameField},
       function (err, user) {

        if (err) {
            return done(err);
        }

        if (!user) {
            return done(null, false,
                {message: 'Incorrect username.'});
        }

        if (!user.validPassword(passwordField)) {
            return done(null, false,
                {message: 'Incorrect   password.'});
        }

        return done(null, user);
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findOne({where: {id}}).then((user) => {
        done(null, user);
        return null;
    });
});
