const Like = require('../database/models/like');

class LikeRepository {

    async getLike(data) {
        Like.findOne({
            where: {
                userId: data.userId,
                postId: data.postId,
            }
        });
        return 200;
    }

  async createLike(data) {
    Like.create({
      userId: data.userId,
      postId: data.postId,
    });
    return 201;
  }

  async deleteLike(data) {
      Like.destroy({
        userId: data.userId,
        postId: data.postId,
      });
      return 200;
  }

}

module.exports = LikeRepository;
