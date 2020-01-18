const postService = require('../services/post');

class PostController {

  async create(req, res) {
    try {
      await postService.prototype.create(req.body).then(() => {
        return res.status(201).json('Post Create Successfully');
        });
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async update(req, res) {
    try {
      await postService.prototype.update(req.body);
      return res.status(201).json('Post has been updated successfully');
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async delete(req, res) {
    try {
      await postService.prototype.delete(req.body);
      return res.status(201).json('Post has been deleted successfully');
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async get(req, res) {
    try {
      await postService.prototype.get(req.body).then(() => {
        return res.status(201).json('Post has been finned successfully');
      });
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async getAll(req, res) {
    try {
      await postService.prototype.getAll(req.body);
      return res.status(201).json('Posts of user have been finned successfully');
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async getAllPostsAsNews(req, res) {
    try {
      await postService.prototype.getAllPostsAsNews();
      return res.status(201).json('News have been finned successfully');
    } catch (error) {
      return res.status(404).json(error);
    }
  }

}

module.exports = PostController;
