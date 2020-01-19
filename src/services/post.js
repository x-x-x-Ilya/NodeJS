const Repository = require('../repositories/post');
const User = require('../database/models/user');

const postRepository = new Repository();

class PostServices {

  async create(data) {
    // add test is url   /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
    // add test userId is true
    return await postRepository.createPost(data);
  }

  async get(data) {
      return await postRepository.getPost(data);
      // add response if not exists
  }

  async delete(data) {
      return await postRepository.deletePost(data);
  }

  async update(data) {
      return await postRepository.updatePost(data);
  }

  async getAll(data) {
      if(User.findOne(data) === undefined){
          return 'User with this id is not exists';
      } else
      return await postRepository.getAllPosts(data);
  }
    async getAllPostsAsNews() {
      return await postRepository.getAllPostsAsNews();
    }

}

module.exports = PostServices;
