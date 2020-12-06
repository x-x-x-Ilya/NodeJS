import Repository from '../repositories/LikeRepository';
const likeRepository = new Repository();

class LikeService {
    async create(body, user) {
        return await likeRepository.createLike(body, user);
    }

    async delete(body, user) {
        return await likeRepository.deleteLike(body, user);
    }
}

export default LikeService;
