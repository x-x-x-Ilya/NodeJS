const Repository = require('../repositories/PostRepository');
const postRepository = new Repository();

class PostService {

    async create(body, user) {
        return await postRepository.createPost(body, user);
    }

    async get(body) {
        if (!body.id) return 'Data is undefined, check it';
        return await postRepository.getPost(body);
    }

    async delete(body, user) {
        if (!body.id) return 'No post id in request';
        return await postRepository.deletePost(body, user);
    }

    async update(body, user) {
        if (!body.id) return 'No post id in request';
        return await postRepository.updatePost(body, user);
    }

    async getAllPosts(body) {
        return await postRepository.getAllPosts(body);
    }

}

module.exports = PostService;
