const Tag = require('../database/models/tag');

class TagRepository {
  async createTag(id, name) {
    return await Tag.create({
      id,
      name,
    });
  }

  getAllTags(postId) { // &
    return 0;// Tag.getAll();
  }
}

module.exports = TagRepository;
