const postService = require('../services/post');

class PostController {
  create(req, res) {
    res.send(req.params); // req.body === {};
    try {
      return res.status(201).json(postService.prototype.create(req.body), 'Post Create Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  delete(req, res) {
    try {
      return res.status(201).json(postService.prototype.delete(req.body), 'Post Delete Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  get(req, res) {
    try {
      const Post = postService.prototype.get(req.body);
      return res.status(201).json(Post, 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  getAll(req, res) {
    try {
      const allPosts = postService.prototype.getAll(req.body);
      return res.status(201).json(allPosts, 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }
}

module.exports = PostController;
