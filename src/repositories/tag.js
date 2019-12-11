var db = require(`./src/database/models/index`);

class TagRepository {

    async createTag(tagId, postId) {
        return await db.Tag.create({
            where: {id:tagId},
            include: [  {
                model: db.Post,
                attributes: ['post_id'],
                through: {attributes: []},
            },
            ],
        });
    };

}

module.exports = TagRepository;