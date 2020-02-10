const Repository = require('../repositories/LikeRepository');
const likeRepository = new Repository();

class LikeService {

    async create(body, user) {
        /*
        * Можно ставить лайки повторно
        * */
        return await likeRepository.createLike(body, user);
    }

    async delete(body, user) {
        return await likeRepository.deleteLike(body, user);
    }

    async getAll(body) {
        return await likeRepository.getLikes(body);
    }

}

module.exports = LikeService;
