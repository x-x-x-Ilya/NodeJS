var db = require(`./src/database/models/index`);

class PostRepository {

    async createPost(postId, userId) {
        return await db.Post.create({
            where:{postId, userId},
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