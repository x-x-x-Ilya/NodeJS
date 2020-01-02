const Post = require('../database/models/post');

class PostRepository {
  async createPost(userId, createdAt, img, caption) {
    return await Post.create({
      userId,
      createdAt,
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

  getAllPosts(userId) {
    return Post.getAll({
      userId,
    });
  }
}

module.exports = PostRepository;
