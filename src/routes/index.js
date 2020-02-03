const express = require('express');

const router = express.Router();

const userRouter = require('./user');
const likeRouter = require('./like');
const postRouter = require( './post');
const tagRouter = require('./tag');
const roleRouter = require('./role');

const passport = require('passport');

router.get('/', (req, res) => res.status(201).json('main page'));
router.use('/user', userRouter);
router.use('/like', likeRouter);
router.use('/post', postRouter);
router.use('/tag', tagRouter);
router.use('/role', roleRouter);

function login(req,res,next) {
    passport.authenticate('local',
        function(err, user, info) {
            try {
                req.logIn(user, function(err) {
                    if (err) { return err; }
                    return res.status(200).json('it is OK');
                });
            } catch (e) {
                console.log(e);
                return e;
            }
        })(req,res,next)
}


router.post('/login', login);

/*
router.get('/login2',
    function (req,res,next) {
        console.log('asdasdasda', req.user);
    });
*/

router.get('/logout', function(req, res) {
    if (req.isAuthenticated()){
        req.logout();
        return res.status(200).json('You Logout');
    } else
        return res.status(404).json('You not authenticated');
});


module.exports = router;
