const Like = require("../database/models/like");

class LikeRepository {

    async createLike(userId, postId) {
        return await Like.create({
                userId, postId
        });
    };

    async deleteLike(userId, postId) {
        return await Like.destroy({
            where: {userId, postId},
        });
    };

}

module.exports = LikeRepository;