var db = require(`./src/database/models/index`);

class LikeRepository {

    async createLike(userId, postId) {
        return await db.Like.create({
                where: {user_id:userId, post_id:postId},
        });
    };

}

module.exports = LikeRepository;