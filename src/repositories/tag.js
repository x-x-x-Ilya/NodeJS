const Tag = require('../database/models/tag');

class TagRepository {

  async createTag(data) {
    try {
      await Tag.create({
        name: data.name,
      });
      return 201;
    } catch (e) {
      console.log('Repositories error', e);
      return 404; // не отправляет 404 при ошибке, но обрабатывает ее.
    }
  }

  async getTag(data) {
    try {
      await Tag.findOne({
       /* where: {
         user id: data.user id,
         post id: data.post id,
        },*/
      }).then((note) => {
        console.log(note.get({plain: true}));
        console.log('********************');
        console.log(
            `id: ${note.id}, 
              name: ${note.name}, 
              user_id: ${note.user_id}, 
              post_id: ${note.post_id},` );
      });
      return 200;
    } catch (e) {
      console.log(e);
      return 404;
    }
  }

  async getAllTags(data) { // &
    try {
      await Tag.findAll({
      }).then(tags => {
        console.log(tags.map(tag => tag.toJSON()))
      });
      return 200;
    } catch (e) {
      console.log('Repositories error', e);
      return 404;
    }
  }

  async updateTag(data) {

    try {
      await Tag.update({
        /* where: {
          user id: data.user id,
          post id: data.post id,
         },*/
        name: data.name,
      });
      return 200;
    } catch (e) {
      console.log('Repositories error', e);
      return 404;
    }
  }

}

module.exports = TagRepository;
