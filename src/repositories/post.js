const Post = require('../database/models/post');

class PostRepository {

  async createPost(data) {

    try {
      await Post.create({
        user_id: data.user_id,
        created_at: new Date(),
        img: data.img,
        caption: data.caption,
      });
    } catch (error) {
      console.log('undefined error Something wrong', error);
    }
    return 'success';
  }

  async getPost(data) {

  try {
    await Post.findOne({
      attributes: ['id', 'user_id', 'created_at', 'img', 'caption'],
      where: {
        id: data.id,
      },
        }).then((note) => {
      console.log(note.get({plain: true}));
      console.log('********************');
      console.log(
          `id: ${note.id}, 
              user_id: ${note.user_id}, 
              created_at: ${note.created_at}, 
              img: ${note.img}, 
              caption: ${note.caption}`);
    });
    return 200;
  } catch (e) {
    console.log('undefined error Something wrong', e);
  }
    return 'success';
  }

  async updatePost(data) {
    try {
      await Post.update({
        where: {
          id: data.id,
        },
        created_at: new Date(),
        img: data.img,
        caption: data.caption,
      }).then((note) => {
        console.log(note.get({plain: true}));
        console.log('********************');
        console.log(
            `id: ${note.id}, 
              user_id: ${note.user_id}, 
              created_at: ${note.created_at}, 
              img: ${note.img}, 
              caption: ${note.caption}`);
      });
    } catch (error) {
      console.log('undefined error Something wrong', error);
    }
    return 'success';
  }

  async deletePost(data) {

    try {
      await Post.destroy({
        where: {
          id: data.user_id,
        }
      });
    } catch (error) {
      console.log('undefined error Something wrong', error);
    }
    return 'success';
  }

  async getAllPosts(data) {
    try {
      await Post.findAll({
        where: {
          id: data.user_id,
        }
      }).then(posts => {
        console.log(posts.map(post => post.toJSON()))
      });
    } catch (error) {
      console.log('undefined error Something wrong', error);
    }
    return 'success';
  }
}

module.exports = PostRepository;
