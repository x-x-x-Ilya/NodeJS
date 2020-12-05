// index.js
const cron = require('node-cron');
const express = require('express');
const fs = require('fs');
//const Post = require("../repositories/PostRepository");
const Post = require('../database/models/post');
app = express();

cron.schedule('* * 24 * *', () => {
    Post.getAllPosts({}).then(posts => {
        if (posts[0].createdAt >= 2592000000) {
            posts[0].destroy();
        }
    });

    fs.unlink('./error.log', err => {
        if (err) throw err;
        return 'Error file successfully deleted', err;
    });
});
