const express = require('express');

const router = express.Router();

const userRouter = require('./user');
const likeRouter = require('./like');
const postRouter = require( './post');
const tagRouter = require('./tag');
const roleRouter = require('./role');
const passportRouter = require('./passport');

router.get('/', (req, res) => res.status(201).json('main page'));
router.use('/user', userRouter);
router.use('/like', likeRouter);
router.use('/post', postRouter);
router.use('/tag', tagRouter);
router.use('/role', roleRouter);
router.use('/passport', passportRouter);

module.exports = router;
