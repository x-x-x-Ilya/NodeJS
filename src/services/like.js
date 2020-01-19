const Repository = require('../repositories/like');

const likeRepository = new Repository();

class likeServices {

   create(data) {
       likeRepository.createLike(data);
  }

  async delete(data) {
      await likeRepository.deleteLike(data);
  }

  async getAll(data) {
    await likeRepository.getLikes(data);
  }

}

module.exports = new likeServices();
