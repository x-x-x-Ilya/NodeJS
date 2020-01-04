const postService = require('../services/post');

class Data {
  constructor(user_id, created_at, img, caption) {
    this.user_id = user_id;
    this.created_at = created_at;
    this.img = img;
    this.caption = caption;
  }
}

class PostController {

  async create(req, res) {

    try {
      const user_id = req.body.user_id;
      const created_at = req.body.created_at;
      const img = req.body.img;
      const caption = req.body.caption;

      const data = new Data(user_id, created_at, img, caption);

      await postService.prototype.create(data);
      return res.status(201).json('Post Create Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async delete(req, res) {

    try {
      const user_id = req.body.user_id;
      const created_at = req.body.created_at;
      const img = req.body.img;
      const caption = req.body.caption;

      const data = new Data(user_id, created_at, img, caption);

      await postService.prototype.delete(data);
      return res.status(201).json('Post Delete Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async get(req, res) {

    try {
      const user_id = req.body.user_id;
      const created_at = req.body.created_at;
      const img = req.body.img;
      const caption = req.body.caption;

      const data = new Data(user_id, created_at, img, caption);

      await postService.prototype.get(data);
      return res.status(201).json(201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const user_id = req.body.user_id;
      const created_at = req.body.created_at;
      const img = req.body.img;
      const caption = req.body.caption;

      const data = new Data(user_id, created_at, img, caption);

      postService.prototype.getAll(data);
      return res.status(201).json(201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

}

module.exports = PostController;
