const Post = require('../database/models/post');

class PostRepository {
  async createPost(userId, createdAt, img, caption) {
    try {
      await Post.create({
        userId,
        createdAt,
        img,
        caption,
      });
    } catch (error) {
      console.log('undefined error Something wrong');
    }
    return 'success';
  }

  async updatePost(postId) {
    try {
      await Post.get({
        id: postId,
      });
    } catch (error) {
      console.log('undefined error Something wrong');
    }
    return 'success';
  }

  async deletePost(postId) {
    try {
      await Post.destroy({
        postId,
      });
    } catch (error) {
      console.log('undefined error Something wrong');
    }
    return 'success';
  }

  async getAllPosts(userId) {
    try {
      await Post.getAll({
        userId,
      });
    } catch (error) {
      console.log('undefined error Something wrong');
    }
    return 'success';
  }
}

module.exports = PostRepository;
