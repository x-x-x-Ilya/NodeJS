var repository = require(`./src/repositories/post`);

postRepository =  new repository();

class PostServices {

    async create(post) {
        return await postRepository.createPost(post);
    }

    async delete_post(post) {
        return await postRepository.deletePost(post);
    }

}

module.exports = PostServices;
