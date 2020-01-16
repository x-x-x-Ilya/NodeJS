const Tag = require('../database/models/tag');

class TagRepository {

  async createTag(data) {

      await Tag.create({
        name: data.name,
      });
      return 201;
  }

  async getTag(data) {
      await Tag.findOne({
       /* where: {
         user id: data.user id,
         post id: data.post id,
        },*/
      }).then((note) => {
        console.log(note.get({plain: true}));
        /*console.log('********************');
        console.log(
            `id: ${note.id}, 
              name: ${note.name}, 
              user_id: ${note.userId}, 
              post_id: ${note.postId},` );*/
      });
      return 200;
  }

  async getAllTags(data) { // &
      await Tag.findAll({
          /* where: {
  user id: data.user id,
  post id: data.post id,
 },*/
      }).then(tags => {
        console.log(tags.map(tag => tag.toJSON()))
      });
      return 200;

  }

  async updateTag(data) {

      await Tag.update({
        /* where: {
          user Id: data.user Id,
          post Id: data.post Id,
         },*/
        name: data.name,
      });
      return 200;
  }

}

module.exports = TagRepository;
