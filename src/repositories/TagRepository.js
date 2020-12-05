const Tag = require('../database/models/tag');
const Post = require('../database/models/post');

class TagRepository {
    async createTag(tags, postId, user) {
        //await post.setTags([]);
        const post = Post.findOne({ where: { id: postId } });

        if (post.userId === user.id) {
            if (tags) {
                for (const tagName of tags) {
                    const tag = await Tag.findOrCreate({
                        where: { name: tagName },
                        default: { name: tagName },
                    });
                    await post.addTag(tag[0]);
                }
            }
            return post;
        }
    }

    async getTag(data) {
        await Tag.findOne({
            /* where: {
              user id: data.user id,
              post id: data.post id,
             },*/
        }).then(note => {
            console.log(note.get({ plain: true }));
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
            name: data.name,
        });
        return tag;
    }
}

module.exports = TagRepository;
