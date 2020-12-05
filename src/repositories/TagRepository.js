import { findOrCreate, findOne, findAll } from '../database/models/tag';
import { findOne as _findOne } from '../database/models/post';

class TagRepository {
    async createTag(tags, postId, user) {
        //await post.setTags([]);
        const post = _findOne({ where: { id: postId } });

        if (post.userId === user.id) {
            if (tags) {
                for (const tagName of tags) {
                    const tag = await findOrCreate({
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
        await findOne({
            /* where: {
              user id: data.user id,
              post id: data.post id,
             },*/
        }).then(note => {
            return note.get({ plain: true });
        });
    }

    async getAllTags(data) {
        return await findAll({
            where: {
                //   postId: data.postId
            },
        });
    }

    async updateTag(data) {
        const tag = await findOne({
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

export default TagRepository;
