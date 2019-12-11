var db = require(`./src/database/models/index`);

class PostRepository {

    async createPost(postId, userId) {
        return await db.Post.create({
            where:{id:postId, userId:userId},
        });
    }

    async updatePost(postId) {
        return await db.Post.get({
            where: {id:postId},
        });
    }

    async deletePost(postId) {
        return await db.Post.destroy({
            where: {id:postId},
        });
    }

     getAllPosts() {
        return  db.Post.getAll();
    }


}

module.exports = PostRepository;