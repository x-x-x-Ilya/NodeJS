const Repository = require('../repositories/post');
const User = require('../database/models/user');

const postRepository = new Repository();

class PostServices {

  async create(data) {
    // add test is url   /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
    if(!data.caption)  return 'Data is undefined, check it';
    return await postRepository.createPost(data);
  }

  async get(data) {
      if(!data.id)  return 'Data is undefined, check it';
      return await postRepository.getPost(data);
  }

  async delete(data) {
      if(!data.id)  return 'Data is undefined, check it';
      return await postRepository.deletePost(data);
  }

  async update(data) {
      if(!data.id)  return 'Data is undefined, check it';
      return await postRepository.updatePost(data);
  }

  async getAll(data) {
      if(!User.findOne(data)){
          return 'User with this id is not exists';
      } else
      return await postRepository.getAllPosts(data);
  }

  async getAllPostsAsNews() {
      return await postRepository.getAllPostsAsNews();
    }

}

module.exports = PostServices;
