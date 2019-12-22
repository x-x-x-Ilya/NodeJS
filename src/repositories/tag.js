const Tag = require("../database/models/tag");

class TagRepository {

    async createTag(tagId, postId) {
        return await Tag.create({
            where: {tagId, postId},
        });
    };

    getAllTags() {
        return  Tag.getAll();
    }
}

module.exports = TagRepository;