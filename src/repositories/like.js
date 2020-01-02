const Like = require('../database/models/like');

class LikeRepository {
  async createLike(userId, postId) {
    try {
      Like.create({
        user_id: userId,
        post_id: postId,
      });
    } catch (e) {
      throw new console.log('undefined error Something wrong');
    }
  }

  async deleteLike(data) {
    try {
      Like.destroy({
        user_id: data.userId,
        post_id: data.postId,
      });
    } catch (e) {
      throw new console.log('undefined error Something wrong');
    }
  }
}

module.exports = LikeRepository;
