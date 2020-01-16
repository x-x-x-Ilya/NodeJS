const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('./database/models/user');

passport.use(new LocalStrategy(function (username, password, done) {
    User.findOne({username: username}, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false,
                {message: 'Incorrect username.'});
        }
        if (!user.validPassword(password)) {
            return done(null, false,
                {message: 'Incorrect   password.'});
        }
        return done(null, user);
    });
}));

//----------------------------------------

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function (username, password, done) {
    // ...
}));


//----------------------------------------------

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

//----------------------------------------------

app.get('/api/users/me', passport.authenticate('basic', {
    session: false
}), function (req, res) {
    res.json({
        id: req.user.id,
        username: req.user.username
    });
});

//----------------------------------------------

//--------------
router.post('/login',
    passport.authenticate('local'),
    function (req, res) {
        // If this function gets called, authentication was
        // successful.
        // `req.user` contains the authenticated user.
        res.redirect('/users/' + req.user.username);
    });

router.get('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }
        req.login(user, function(err) {
            if (err) { return next(err); }
            return res.redirect('/users/' + user.username);
        });
    })(req, res, next);
});

//--------------

