var db = require(`./src/database/models/index`);

class Tag {

    async create(tagId, postId) {
        return await db.Tag.create({
            where: {tag_id:tagId, post_id:postId},
        });
    };

}

module.exports = Tag;