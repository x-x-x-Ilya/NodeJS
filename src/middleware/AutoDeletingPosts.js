import { schedule } from 'node-cron';
import express from 'express';
import { unlink } from 'fs';
import { getAllPosts } from '../database/models/post';
app = express();

schedule('* * 24 * *', () => {
    getAllPosts({}).then(posts => {
        if (posts[0].createdAt >= 2592000000) {
            posts[0].destroy();
        }
    });

    unlink('./error.log', err => {
        if (err) throw err;
        return 'Error file successfully deleted', err;
    });
});
