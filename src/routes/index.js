const express = require('express');

const router = express.Router();

const userRouter = require('./user');
const likeRouter = require('./like');
const postRouter = require( './post');
const tagRouter = require('./tag');
const roleRouter = require('./role');


router.get('/', (req, res) => res.status(201).json('main page'));
router.use('/user', userRouter);
router.use('/like', likeRouter);
router.use('/post', postRouter);
router.use('/tag', tagRouter);
router.use('/role', roleRouter);


//const PassportController = require('../controllers/passport');
//const passportController = new PassportController();
//router.post('/login', passportController.login);

//const passport = require('../middleware/passport-middleware');
const passport = require('passport');

/*const authenticate = passport.authenticate('local', {session: true});
router.post('/login', authenticate, (req, res) => {
    res.send({}) ;
});
*/

router.post('/login', function(req, res, next) {
   try {
       passport.authenticate('local', function (err, user, info) {
           console.log('sdasdasdad');
           if (err) {
               console.log(err);
               return err;
           }
           if (!user) {
               return res.status(200).json('нет такого пользователя');
           }

           req.logIn(user, function (err) {
               if (err) {
                   console.log(err);
                   return err;
               }
               return res.status(200).json('/users/' + user.username);
           });


       }) //(req, res, next)
   } catch (e) {
       console.log(e);
       return e;
   }
   });

/*router.post('/login', passport.authenticate('local'),
    function(req, res) {
        return res.status(200).json('it works!!!');
    });
*/


module.exports = router;
