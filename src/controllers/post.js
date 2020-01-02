const postService = require('../services/post');

class PostController {
  create(req, res) {
    res.send(req.params); // req.body === {};
    try {
      const post = postService.create(req.body); // req.body == NULL;
      return res.status(201).json(post, 'Post Create Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  delete(req, res) {
    try {
      const answer = postService.delete(req.body);
      return res.status(201).json(answer, 'Post Delete Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  get(req, res) {
    try {
      const Post = postService.get(req.body);
      return res.status(201).json(Post, 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  getAll(req, res) {
    try {
      const allPosts = postService.getAll(req.body);
      return res.status(201).json(allPosts, 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }
}

module.exports = PostController;
