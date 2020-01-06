const Repository = require('../repositories/post');

const postRepository = new Repository();

class PostServices {

  async create(data) {
    try {
      await postRepository.createPost(data).then(answer);
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
      await postRepository.updatePost(data).then(answer);
      return answer;
    } catch (e) {
      console.log('Services error', e);
    }
  }
}

module.exports = PostServices;
