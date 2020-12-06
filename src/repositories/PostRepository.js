import Post from '../database/models/post';
import { prototype } from './TagRepository';
import Tag from '../database/models/tag';
import Like from '../database/models/like';

class PostRepository {
    async createPost(postData, tags, user) {
        const post = await Post.create({
            userId: user.id,
            createdAt: new Date(),
            img: postData.img,
            caption: postData.caption,
        });
        try {
            await prototype.createTag(tags, post.id, user);
        } catch (error) {
            return error;
        }
    }

    async getPost(body) {
        try {
            console.log('0');
            const post = await Post.findAll({
                attributes: ['id', 'userId', 'createdAt', 'img', 'caption'],
                where: body,
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
            console.log('post =', post);
            return post;
        } catch (error) {
            console.log('error =', error);
            return error;
        }
        /*
        if (data.id === undefined) {
            await Post.findAll({
                attributes: ['id', 'userId', 'createdAt', 'img', 'caption'],
                where: {
                    id: data.id,   // FIND BY TAGS
                },
            }).then((posts) => {
                console.log(posts.map(post => post.toJSON()));
            });
        }
    }
  */
    }

    async updatePost(body, user) {
        const post = await Post.findOne({
            where: {
                id: body.id,
            },
        });
        if (post.createdAt - Date.now() * 10 <= 1800)
            if (post.userId === user.id) {
                await post.update({
                    createdAt: new Date(),
                    img: body.img,
                    caption: body.caption + ' (updated)',
                });
                return post;
            } else return 'This is post is not yours';
    }

    async deletePost(body, user) {
        const post = await Post.findOne({
            where: {
                id: body.id,
            },
        });
        if (post.userId === user.id) {
            await post.destroy();
            return post;
        } else return 'This is post is not yours';
    }

    async getAllPosts(options) {
        return await Post.findAll({
            where: options,
        });
    }
}

export default PostRepository;
