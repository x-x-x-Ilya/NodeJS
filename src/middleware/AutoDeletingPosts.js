const cron = require("node-cron");
const fs = require("fs");
const Post = require("../database/models/post");

exports.autoDel = () => {
    try {
        cron.schedule("* * 24 * *", () => {

            Post.getAllPosts({}).then((posts) => {
                for (let post of posts)
                    if (post.createdAt >= 2592000000) {
                        post.destroy();
                    }
            });
            fs.unlink("./error.log", err => {
                if (err) throw err;
                console.log("Error file successfully deleted", err);
            });
        });
    } catch (e) {
        console.log(e);
    }
};
