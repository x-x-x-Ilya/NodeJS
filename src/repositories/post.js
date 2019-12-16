var db = require("../database/models/index");

class PostRepository {

    async createPost(postId) {
        return await db.Post.create({
            where:{postId},
        });
    }

    async updatePost(postId) {
        return await db.Post.get({
            where: {postId},
        });
    }

    async deletePost(postId) {
        return await db.Post.destroy({
            where: {postId},
        });
    }

     getAllPosts() {
        return  db.Post.getAll();
    }


}

module.exports = PostRepository;