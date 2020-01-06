const Post = require('../database/models/post');

class PostRepository {

  async createPost(data) {

    try {
      await Post.create({
        user_id: data.user_id,
        created_at: data.created_at,
        img: data.img,
        caption: data.caption,
      });
    } catch (error) {
      console.log('undefined error Something wrong', error);
    }
    return 'success';
  }


  async updatePost(data) {
    try {
      await Post.update({
        attributes: ['id', 'user_id', 'created_at', 'img', 'caption'],
        where: {
          id: data.post_id,
        }
      }).then((note) => {
        console.log(note.get({plain: true}));
        console.log('********************');
        console.log(
            `id: ${note.id}, 
              email: ${note.user_id}, 
              first_name: ${note.created_at}, 
              last_name: ${note.img}, 
              delete_req: ${note.caption}`);
      });
    } catch (error) {
      console.log('undefined error Something wrong', error);
    }
    return 'success';
  }

  async deletePost(postId) {

    try {
      await Post.destroy({
        postId,
      });
    } catch (error) {
      console.log('undefined error Something wrong');
    }
    return 'success';
  }

  async getAllPosts(userId) {
    try {
      await Post.getAll({
        userId,
      });
    } catch (error) {
      console.log('undefined error Something wrong');
    }
    return 'success';
  }
}

module.exports = PostRepository;
