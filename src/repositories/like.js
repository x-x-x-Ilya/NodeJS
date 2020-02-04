const Like = require('../database/models/like');

class LikeRepository {

     async getLikes(body) {
         return Like.findAll({
             where: {
                 postId: body.postId,
             }
         });
     }

   async createLike(body, user) {
    return await Like.create({
      userId: user.id,
      postId: body.postId,
    });
  }

  async deleteLike(body, user) {
      const like = await Like.findOne({
          where: {
              userId: user.id,
              postId: body.postId,
          }
      });
      like.destroy();
      return like;
  }

}

module.exports = LikeRepository;
