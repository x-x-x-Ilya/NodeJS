import Like from '../database/models/like';

class LikeRepository {
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
            },
        });
        like.destroy();
        return like;
    }
}

export default LikeRepository;
