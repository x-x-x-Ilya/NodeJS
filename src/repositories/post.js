const Post = require("../database/models/post");

class PostRepository {

    async createPost(postId) {
        return await Post.create({
            where:{postId},
        });
    }

    async updatePost(postId) {
        return await Post.get({
            where: {postId},
        });
    }

    async deletePost(postId) {
        return await Post.destroy({
            where: {postId},
        });
    }

     getAllPosts() {
        return  Post.getAll();
    }


}

module.exports = PostRepository;