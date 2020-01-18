const Post = require('../database/models/post');

class PostRepository {

  async createPost(data) {
    await Post.create({
        userId: data.userId,
        createdAt: new Date(),
        img: data.img,
        caption: data.caption,
      });
  }

  async getPost(data) {
      await Post.findOne({
          attributes: ['id', 'userId', 'createdAt', 'img', 'caption'],
          where: {
              id: data.id,
          },
      }).then((post) => {
          console.log(post.get({plain: true}));
      });
      /*
      if (data.id === undefined) {
          await Post.findAll({
              attributes: ['id', 'userId', 'createdAt', 'img', 'caption'],
              where: {
                  id: data.id,   // FIND BY TAGS
              },
          }).then((posts) => {
              console.log(posts.map(post => post.toJSON()));
          });
      }
  }
*/
  }


  async updatePost(data) {

      await Post.findOne({
          where: {
              id: data.id,
          },
      }).then((post) => {
          post.update({
              createdAt: new Date(),
              img: data.img,
              caption: data.caption + ' (updated)'
          });
      });
  }

  async deletePost(data) {
      await Post.findOne({
        where: {
          id: data.id,
        }
      }).then((post) => {
          console.log(post.get({plain: true}));
          post.destroy();
      });
  }

  async getAllPosts(data) {
      await Post.findAll({
        where: {
            userId: data.userId,
        }
      }).then(posts => {
        console.log(posts.map(post => post.toJSON()))
      });
  }

    async getAllPostsAsNews() {
        await Post.findAll({
        }).then(posts => {
            console.log(posts.map(post => post.toJSON()))
        });
    }

}

module.exports = PostRepository;
