import Tag from '../database/models/tag';
import Post from '../database/models/post';
import Like from '../database/models/like';

class TagRepository {
    async createTag(tags, postId, user) {
        //await post.setTags([]);
        const post = await Post.findOne({
            where: { id: postId },
            include: [
                {
                    model: Tag,
                    attributes: ['name'],
                    as: 'tags',
                },
                {
                    model: Like,
                    attributes: ['userId'],
                    as: 'likes',
                },
            ],
        });

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

            return await Post.findOne({
                where: { id: postId },
                include: [
                    {
                        model: Tag,
                        attributes: ['name'],
                        as: 'tags',
                    },
                    {
                        model: Like,
                        attributes: ['userId'],
                        as: 'likes',
                    },
                ],
            });
        }
    }
}

export default TagRepository;
