const Post = require('../database/models/post');

class PostRepository {
  async createPost(user_id, created_at, img, caption) {
    return await Post.create({
      user_id,
      created_at,
      img,
      caption,
    });
  }

  async updatePost(postId) {
    return await Post.get({
      id: postId,
    });
  }

  async deletePost(postId) {
    return await Post.destroy({
      postId,
    });
  }

  getAllPosts(user_id) {
    return Post.getAll({
      user_id,
    });
  }
}

module.exports = PostRepository;
