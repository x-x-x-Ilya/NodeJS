const Tag = require('../database/models/tag');

class TagRepository {

  async createTag(data) {
      return await Tag.create({
        name: data.name,
      });
  }

  async getTag(data) {
      await Tag.findOne({
       /* where: {
         user id: data.user id,
         post id: data.post id,
        },*/
      }).then((note) => {
        console.log(note.get({plain: true}));
      });
  }

  async getAllTags(data) {
      return await Tag.findAll({
           where: {
     //   postId: data.postId
        },
      });
  }

  async updateTag(data) {
      const tag = await Tag.findOne({
        /* where: {
          user Id: data.user Id,
          post Id: data.post Id,
         },*/

      });
      await tag.update({
          name: data.name
      });
      return tag;
  }

}

module.exports = TagRepository;
