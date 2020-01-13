const postService = require('../services/post');

class PostController {

  async create(req, res) {
    //const date = new Date(req.body.tour_date).toISOString();
    try {

      await postService.prototype.create(req.body/*date*/);
      return res.status(201).json('Post Create Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async update(req, res) {

    try {
      await postService.prototype.update(req.body);
      return res.status(201).json('Post Create Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async delete(req, res) {

    try {
      await postService.prototype.delete(req.body);
      return res.status(201).json('Post Delete Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async get(req, res) {

    try {
      await postService.prototype.get(req.body);
      //return 200;
      return res.status(201).json('success');
    } catch (error) {
      console.log(error);
      return 404;
      //return res.status(error.status).json(error);
    }
  }

  async getAll(req, res) {

    try {
      await postService.prototype.getAll(req.body);
      return res.status(201).json('success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

}

module.exports = PostController;
