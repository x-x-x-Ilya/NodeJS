//const app = require('../app');
let express = require('express');

const router = express.Router();

let user_router = require( './user');
let like_router = require( './like');
//let post_router = require( './post');
let tag_router = require( './tag');

//exports.addRoutes = () => {
    router.get('/', function (req, res) {return  res.status(201).json("main page");});
    router.use('/user', user_router);
    router.use('/like', like_router);
    //router.use('/post', post_router);
    //router.use('/tag', tag_router);

module.exports = router;
//};

