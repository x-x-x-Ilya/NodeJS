const Post = require('../database/models/post');

class PostRepository {

  async createPost(data) {
      await Post.create({
        userId: data.userId,
        createdAt: new Date(),   // update database/table
        img: data.img,
        caption: data.caption,
      });
    return 201;
  }

  async getPost(data) {
    await Post.findOne({
      attributes: ['id', 'userId', 'createdAt', 'img', 'caption'],
      where: {
        id: data.id,
      },
    }).then((note) => {
      console.log(note.get({plain: true}));
      /*console.log('********************');
      console.log(
          `id: ${note.id}, 
              userId: ${note.userId}, 
              createdAt: ${note.createdAt}, 
              img: ${note.img}, 
              caption: ${note.caption}`);*/
    });
    return 200;
  }
    /*await Post.findAll({
      attributes: ['id', 'userId', 'createdAt', 'img', 'caption'],
      where: {
        id: data.id,   // FIND BY TAGS
      },
    }).then((note) => {
      console.log(note.get({plain: true}));
      console.log('********************');
      console.log(
          `id: ${note.id},
              userId: ${note.userId},
              createdAt: ${note.createdAt},
              img: ${note.img},
              caption: ${note.caption}`);
    });*/



  async updatePost(data) {

      await Post.update({
        where: {
          id: data.id,
        },
        createdAt: new Date(),
        img: data.img,
        caption: data.caption,
      }).then((note) => {
        console.log(note.get({plain: true}));
        /*console.log('********************');
        console.log(
            `id: ${note.id}, 
              userId: ${note.userId},
              createdAt: ${note.createdAt},
              img: ${note.img}, 
              caption: ${note.caption}`);*/
      });
    return 200;
  }

  async deletePost(data) {
      await Post.destroy({
        where: {
          id: data.userId,
        }
      });
    return 200;
  }

  async getAllPosts(data) {
      await Post.findAll({
        where: {
          id: data.userId,
        }
      }).then(posts => {
        console.log(posts.map(post => post.toJSON()))
      });
    return 200;
  }

}

module.exports = PostRepository;
