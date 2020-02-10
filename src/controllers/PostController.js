const PostService = require('../services/PostService');

const postService = new PostService();

class PostController {

  async create(req, res) {
    try {
      return res.status(201).json(await postService.create(req.body.post, req.body.tags, req.user));
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async update(req, res) {
    try {
      return res.status(201).json(await postService.update(req.body, req.user));
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async delete(req, res) {
    try {
      return res.status(201).json(await postService.delete(req.body, req.user));
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async get(req, res) {
    try {
      return res.status(201).json(await postService.get(req.body));
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async getAllPosts(req, res) {
    try {
      return res.status(201).json(await postService.getAllPosts(req.body));
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async setTags(req, res) {
    try {
      return res.status(201).json(await postService.setTags());
    } catch (error) {
      return res.status(404).json(error);
    }
  }

}

module.exports = PostController;
