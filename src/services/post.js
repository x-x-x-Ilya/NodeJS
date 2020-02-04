const Repository = require('../repositories/post');
const User = require('../database/models/user');

const postRepository = new Repository();

class PostServices {

  async create(body, user) {
    // add test is url   /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
    if(!body.caption)  return 'No caption url in request';
    return await postRepository.createPost(body, user);
  }

  async get(body) {
      if(!body.id)  return 'Data is undefined, check it';
      return await postRepository.getPost(body);
  }

  async delete(body, user) {
      if(!body.id)  return 'No post id in request';
      return await postRepository.deletePost(body, user);
  }

  async update(body, user) {
      if(!body.id)  return 'No post id in request';
      return await postRepository.updatePost(body, user);
  }

  async getAll(body) {
      if(!User.findOne(body)){
          return 'User with this id is not exists';
      } else
      return await postRepository.getAllPosts(body);
  }

  async getAllPostsAsNews() {
      return await postRepository.getAllPostsAsNews();
    }

}

module.exports = PostServices;
