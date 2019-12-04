var db = require(`./src/database/models/index`);

class Post {

    async create(post) {
        return await db.Post.create(post);
    }

    async update(postId) {
        return await db.Post.get({
            where: {post_id:postId},
        });
    }

    async delete(postId) {
        return await db.Post.destroy({
            where: {post_id:postId},
        });
    }

    async get_all(postId) {
        return await db.Post.get({
            where: {post_id:postId},
        });
    }


}

module.exports = Post;