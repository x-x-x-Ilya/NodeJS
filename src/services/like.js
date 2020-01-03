const Repository = require('../repositories/like');

const likeRepository = new Repository();

class likeServices {
  async create(data) {
    try {
      return await likeRepository.createLike(data);
    } catch (e) {
      throw new console.log('undefined error Something wrong');
    }
  }

  /* async get(data) {
        return await likeRepository.takeLike(data);
    }
*/
  async delete(data) {
    try {
      await likeRepository.deleteLike(data);
    } catch (e) {
      throw new console.log('undefined error Something wrong');
    }
  }
/*
    async getAll(data) {
        return await likeRepository.getAllLikes(data);
    }
  */
}

module.exports = likeServices;
