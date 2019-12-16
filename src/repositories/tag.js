var db = require("../database/models/index");

class TagRepository {

    async createTag(tagId, postId) {
        return await db.Tag.create({
            where: {tagId, postId},
        });
    };

    getAllTags() {
        return  db.Tag.getAll();
    }
}

module.exports = TagRepository;