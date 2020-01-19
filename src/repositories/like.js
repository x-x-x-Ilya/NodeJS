const Like = require('../database/models/like');

class LikeRepository {

     getLikes(data) {
         Like.findAll({
            where: {
                postId: data.postId,
            }
        }).then((likes) => {
            console.log(likes.map(like => like.toJSON()));
        });
    }

   createLike(data) {
    Like.create({
      userId: data.userId,
      postId: data.postId,
    });
  }

  async deleteLike(data) {
      Like.destroy({
          where: {
              userId: data.userId,
              postId: data.postId,
          }
      });
  }

}

module.exports = LikeRepository;
