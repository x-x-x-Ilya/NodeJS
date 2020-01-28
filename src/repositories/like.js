const Like = require('../database/models/like');

class LikeRepository {

     async getLikes(data) {
         return  await Like.findAll({
            where: {
                postId: data.postId,
            }
        });
    }

   async createLike(data) {
    return await Like.create({
      userId: data.userId,
      postId: data.postId,
    });
  }

  async deleteLike(data) {
      const like = await Like.findOne({
          where: {
              userId: data.userId,
              postId: data.postId,
          }
      });
      like.destroy();
      return like;
  }

}

module.exports = LikeRepository;
