const Post = require("../database/models/post");

class PostRepository {

    async createPost(user_id, created_at,img, caption) {
        return await Post.create({
            user_id: user_id,
            created_at: created_at,
            img: img,
            caption: caption
        });
    }

    async updatePost(postId) {
        return await Post.get({
            id: postId
        });
    }

    async deletePost(postId) {
        return await Post.destroy({
            postId
        });
    }

     getAllPosts(user_id) {
        return  Post.getAll({
            user_id: user_id
        });
    }

}

module.exports = PostRepository;