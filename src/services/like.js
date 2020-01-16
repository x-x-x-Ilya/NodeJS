const Repository = require('../repositories/like');

const likeRepository = new Repository();

let answer;

class likeServices {

  async create(data) {
    if (await likeServices.prototype.get(data) === 200) {
    return 404;
    }
    else {
      await likeRepository.createLike(data).then(answer);
      return answer
    }
  }

  async delete(data) {
    if (await likeServices.prototype.get(data) === 200)
      await likeRepository.deleteLike(data);
  }

  async get(data) {
    await likeRepository.getLike(data).then(answer);
    return answer;
  }

}

module.exports = likeServices;
