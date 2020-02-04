const LikeService = require('../services/like');

const likeService = new LikeService();

class LikeController {

  async create(req, res) {
      try {
        return res.status(201).json(await likeService.create(req.body, req.user));
      } catch(error) {
        return res.status(404).json(error);
      }
  }

  async delete(req, res) {
    try {
       return res.status(201).json(await likeService.delete(req.body, req.user));
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async getAll(req, res) {
    try {
        return res.status(201).json(await likeService.getAll(req.body));
      } catch (error) {
      return res.status(404).json(error);
    }
  }


}

module.exports = LikeController;
