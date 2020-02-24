const Post = require('../database/models/post');
const Tag = require('./TagRepository');
const TagModel = require('../database/models/tag');
const likeModel = require('../database/models/like');

class PostRepository {

    async createPost(postData, tags, user) {
        const post = await Post.create({
            userId: user.id,
            createdAt: new Date(),
            img: postData.img,
            caption: postData.caption,
        });
        try {
            await Tag.prototype.createTag(tags, post.id, user)
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    async getPost(body) {
        return Post.findAll({
            attributes: ['id', 'userId', 'createdAt', 'img', 'caption'],
            where: body,
            include: [
                {
                    model: TagModel,
                    attributes: ['name'],
                    as: 'tags',
                }/*,
                {
                    model: likeModel,
                    attributes: ['userId'],
                    as: 'likes'
                }*/
            ]
        });

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
            }
        });
        if(post.createdAt - Date.now()*10 <= 1800)
        if (post.userId === user.id) {
            await post.update({
                createdAt: new Date(),
                img: body.img,
                caption: body.caption + ' (updated)'
            });
            return post;
        } else
            return 'This is post is not yours';
    }

    async deletePost(body, user) {
        const post = await Post.findOne({
            where: {
                id: body.id,
            }
        });
        if (post.userId === user.id) {
            await post.destroy();
            return post;
        } else
            return 'This is post is not yours';
    }

    async getAllPosts(options) {
        return await Post.findAll({
            where:options,
        });
    }

}

module.exports = PostRepository;
