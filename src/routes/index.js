const express = require('express');

const router = express.Router();

const userRouter = require('./user');
const likeRouter = require('./like');
const postRouter = require( './post');
// const tagRouter = require('./tag');

router.get('/', (req, res) => res.status(201).json('main page'));
router.use('/user', userRouter);
router.use('/like', likeRouter);
router.use('/post', postRouter);
// router.use('/tag', tagRouter);




//passport
/*
function mustAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(401).send({});
    }
    next();
}

router.post('/login',
    passport.authenticate('local', {
        session: true,
        successRedirect: '/',
        failureRedirect: '/login',
    }),
    function (req, res) {
        res.redirect('/' + req.user.username);
    });

router.post('/logout', mustAuthenticated, (req, res) => {
    req.logOut();
    res.send({});
});


router.get('/api/users/me',
    passport.authenticate('local', {
        session: false
}), function (req, res) {
    res.json({
        id: req.user.id,
        username: req.user.username
    });
});

router.get('/login', function(req, res, next) {
    passport.authenticate('local',
        function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }
        req.login(user, function(err) {
            if (err) { return next(err); }
            return res.redirect('/users/' + user.username);
        });
    })(req, res, next);
});
*/
module.exports = router;
