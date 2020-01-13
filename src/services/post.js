const Repository = require('../repositories/post');

const postRepository = new Repository();

let answer;

class PostServices {

  async create(data /*date*/) {
    try {
      await postRepository.createPost(data /*date*/).then(answer);
      return answer;
    } catch (e) {
      console.log('Services error', e);
    }
  }

  async get(data) {
    try {
      await postRepository.getPost(data).then(answer);
      return answer;
    } catch (e) {
      console.log('Services error', e);
    }
  }

  async delete(data) {
    try {
      await postRepository.deletePost(data).then(answer);
      return answer;
    } catch (e) {
      console.log('Services error', e);
    }
  }

  async update(data) {
    try {
      await postRepository.updatePost(data).then(answer);
      return answer;
    } catch (e) {
      console.log('Services error', e);
    }
  }

  async getAll(data) {
    try {
      await postRepository.getAllPosts(data).then(answer);
      return answer;
    } catch (e) {
      console.log('Services error', e);
    }
  }
}

module.exports = PostServices;
