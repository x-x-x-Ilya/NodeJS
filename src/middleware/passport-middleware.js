const User = require('../database/models/user');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(
    new LocalStrategy(async function (username, password, done) {
        try {
            const user = await User.findOne({
                where: { email: username },
            });
            if (!user) return done(null, false);
            if (user.password === password) return done(null, user);
        } catch (error) {
            return error;
        }
    }),
);

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    User.findOne({ where: { id: user.id } }).then(User => {
        done(null, User);
    });
});

module.exports = passport;
