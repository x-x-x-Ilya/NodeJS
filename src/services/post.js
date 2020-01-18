const Repository = require('../repositories/post');
const User = require('../database/models/user');

const postRepository = new Repository();

class PostServices {

  async create(data) {
    // add test is url   /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
    // add test userId is true
    await postRepository.createPost(data);
  }

  async get(data) {
      await postRepository.getPost(data);
      // add response if not exists
  }

  async delete(data) {
      await postRepository.deletePost(data);
  }

  async update(data) {
      await postRepository.updatePost(data);
  }

  async getAll(data) {
      if(User.findOne(data) === undefined){
          console.log('User with this id is not exists');
      }
      else
      await postRepository.getAllPosts(data);
  }
    async getAllPostsAsNews() {
            await postRepository.getAllPostsAsNews();
    }

}

module.exports = PostServices;
