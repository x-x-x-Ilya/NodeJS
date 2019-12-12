var db = require(`./src/database/models/index`);

class LikeRepository {

    async createLike(userId, postId) {
        return await db.Like.create({
                where: {userId, postId},
        });
    };

    async deleteLike(userId, postId) {
        return await db.Like.destroy({
            where: {userId, postId},
        });
    };

}

module.exports = LikeRepository;