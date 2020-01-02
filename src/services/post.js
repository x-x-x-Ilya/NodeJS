const repository = require(`../repositories/post`);

postRepository =  new repository();

class PostServices {

    async create(data) {
        return await postRepository.createPost(data);
    }

    async get(data) {
        return await postRepository.getPost(data);
    }

    async delete(data) {
        return await postRepository.deletePost(data);
    }

    async update(data) {
        return await postRepository.updatePost(data);
    }

    async getAll(data) {
        return await postRepository.updatePost(data);
    }
}

module.exports = PostServices;
