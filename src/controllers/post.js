const PostService = require('../services/post');

const postService = new PostService();

class PostController {

  async create(req, res) {
    try {
        return res.status(201).json(await postService.create(req.body));
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async update(req, res) {
    try {
      return res.status(201).json(await postService.update(req.body));
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async delete(req, res) {
    try {
      return res.status(201).json(await postService.delete(req.body));
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

  async getAll(req, res) {
    try {
      return res.status(201).json(await postService.getAll(req.body));
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async getAllPostsAsNews(req, res) {
    try {
      return res.status(201).json(await postService.getAllPostsAsNews());
    } catch (error) {
      return res.status(404).json(error);
    }
  }

}

module.exports = PostController;
