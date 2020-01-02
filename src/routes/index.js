// const app = require('../app');
const express = require('express');

const router = express.Router();

const user_router = require('./user');
const like_router = require('./like');
// let post_router = require( './post');
const tag_router = require('./tag');

// exports.addRoutes = () => {
router.get('/', (req, res) => res.status(201).json('main page'));
router.use('/user', user_router);
router.use('/like', like_router);
// router.use('/post', post_router);
// router.use('/tag', tag_router);

module.exports = router;
// };
