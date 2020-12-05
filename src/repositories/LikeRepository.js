import { findAll, create, findOne } from '../database/models/like';

class LikeRepository {
    async getLikes(body) {
        return findAll({
            where: {
                postId: body.postId,
            },
        });
    }

    async createLike(body, user) {
        return await create({
            userId: user.id,
            postId: body.postId,
        });
    }

    async deleteLike(body, user) {
        const like = await findOne({
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
