const Tag = require('../database/models/tag');

class TagRepository {
  async createTag(id, name) {
    try {
      await Tag.create({
        id,
        name,
      });
    } catch (error) {
      console.log('undefined error Something wrong');
    }
    return 'success';
  }

  getAllTags(postId) { // &
    return 0;// Tag.getAll();
  }
}

module.exports = TagRepository;
