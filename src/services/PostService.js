const Repository = require('../repositories/PostRepository');
const postRepository = new Repository();

class PostService {
    async create(post, tags, user) {
        // add test is url   /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
        //if(!body.caption)  return 'No caption url in request';
        return await postRepository.createPost(post, tags, user);
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
