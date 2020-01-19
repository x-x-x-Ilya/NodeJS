const Post = require('../database/models/post');

class PostRepository {

    async createPost(data) {
        return await Post.create({
            userId: data.userId,
            createdAt: new Date(),
            img: data.img,
            caption: data.caption,
        });
    }

    async getPost(data) {
        return await Post.findOne({
            attributes: ['id', 'userId', 'createdAt', 'img', 'caption'],
            where: {
                id: data.id,
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


    async updatePost(data) {

        const post = await Post.findOne({
            where: {
                id: data.id,
            },
        });
        await post.update({
            createdAt: new Date(),
            img: data.img,
            caption: data.caption + ' (updated)'
        });
        return post;
    }

    async deletePost(data) {
        const post = await Post.findOne({
            where: {
                id: data.id,
            }
        });
        await post.destroy();
        return post;
    }

    async getAllPosts(data) {
        return await Post.findAll({
            where: {
                userId: data.userId,
            }
        });
    }

    async getAllPostsAsNews() {
        return await Post.findAll({});
    }
}

module.exports = PostRepository;
