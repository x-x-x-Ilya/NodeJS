const repository = require('../repositories/like');

const likeRepository = new repository();

class likeServices {
  async create(data) {
    return await likeRepository.createLike(data);
  }

  /* async get(data) {
        return await likeRepository.takeLike(data);
    }
*/
  async delete(data) {
    return await likeRepository.deleteLike(data);
  }
/*
    async getAll(data) {
        return await likeRepository.getAllLikes(data);
    }
  */
}

module.exports = likeServices;
