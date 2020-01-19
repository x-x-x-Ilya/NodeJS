const Repository = require('../repositories/like');

const likeRepository = new Repository();

class likeServices {

   async create(data) {
       return await likeRepository.createLike(data);
  }

  async delete(data) {
      return await likeRepository.deleteLike(data);
  }

  async getAll(data) {
    return await likeRepository.getLikes(data);
  }

}

module.exports = likeServices;
