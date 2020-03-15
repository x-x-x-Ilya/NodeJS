//const express = require('express');
//const router = express.Router();
module.exports = (app) => {
    const isAuthenticated = require('../middleware/isAuthenticated');
    const isAdmin = require('../middleware/isAdmin');

    const userRouter = require('./user');
    const likeRouter = require('./like');
    const postRouter = require('./post');
    const tagRouter = require('./tag');
    const roleRouter = require('./role');
    const passportRouter = require('./passport');

    app.use('/', passportRouter);

    app.use(isAuthenticated);

    app.use('/user', userRouter);
    app.use('/like', likeRouter);
    app.use('/post', postRouter);
    app.use('/tag', tagRouter);
    app.use('/role', isAdmin, roleRouter);
};
