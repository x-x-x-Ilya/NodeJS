const express = require('express');
const router = express.Router();

const isAuthenticated = require('../middleware/isAuthenticated');
const isAdmin = require('../middleware/isAdmin');

const userRouter = require('./user');
const likeRouter = require('./like');
const postRouter = require('./post');
const tagRouter = require('./tag');
const roleRouter = require('./role');
const passportRouter = require('./passport');

router.get('/', (req, res) => res.status(201).json('main page'));
router.use('/user', isAuthenticated, userRouter);
router.use('/like', isAuthenticated, likeRouter);
router.use('/post', isAuthenticated, postRouter);
router.use('/tag', isAuthenticated, tagRouter);
router.use('/role', isAuthenticated, /*isAdmin,*/ roleRouter);
router.use('/', passportRouter);

module.exports = router;
