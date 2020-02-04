const Post = require('../database/models/post');

class PostRepository {

    async createPost(body, user) {
        return await Post.create({
            userId: user.id,
            createdAt: new Date(),
            img: body.img,
            caption: body.caption,
        });
    }

    async getPost(body) {
        return  Post.findOne({
            attributes: ['id', 'userId', 'createdAt', 'img', 'caption'],
            where: {
                id: body.id,
            },
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

    async getAllPosts(body) {
        return  Post.findAll({
            where: {
                userId: body.userId,
            }
        });
    }

    async getAllPostsAsNews() {
        return Post.findAll({});
    }
}

module.exports = PostRepository;
