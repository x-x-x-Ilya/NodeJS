const Post = require('../database/models/post');
const Tag = require('./tag');
class PostRepository {

    async createPost(postData, tags, user) {
         const post = await Post.create({
            userId: user.id,
            createdAt: new Date(),
            img: postData.img,
            caption: postData.caption,
        });
         try {
             await Tag.prototype.createTag(tags, post)
         }catch (e) {
             console.log(e);
             return e;
         }
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

    async getAllPosts(options) {
        return Post.findAll({ where: options});
    }

}

module.exports = PostRepository;
