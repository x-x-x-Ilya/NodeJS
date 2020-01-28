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


const PassportController = require('../controllers/passport');
const passportController = new PassportController();
router.post('/login', passportController.login);
router.post('/register', passportController.register);
router.get('/logout', passportController.logout);


module.exports = router;
