const Repository = require('../repositories/post');

const postRepository = new Repository();

class PostServices {
  async create(data) {
    try {
      return await postRepository.createPost(data);
    } catch (e) {
      throw new console.log('undefined error Something wrong');
    }
  }

  async get(data) {
    try {
      return await postRepository.getPost(data);
    } catch (e) {
      throw new console.log('undefined error Something wrong');
    }
  }

  async delete(data) {
    try {
      return await postRepository.deletePost(data);
    } catch (e) {
      throw new console.log('undefined error Something wrong');
    }
  }

  async update(data) {
    try {
      return await postRepository.updatePost(data);
    } catch (e) {
      throw new console.log('undefined error Something wrong');
    }
  }

  async getAll(data) {
    try {
      return await postRepository.updatePost(data);
    } catch (e) {
      throw new console.log('undefined error Something wrong');
    }
  }
}

module.exports = PostServices;
