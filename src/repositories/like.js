const Like = require('../database/models/like');

class LikeRepository {

  async createLike(userId, postId) {
      Like.create({
        userId: userId,
        postId: postId,
      });
  }

  async deleteLike(data) {
      Like.destroy({
        userId: data.userId,
        postId: data.postId,
      });
  }

}

module.exports = LikeRepository;
