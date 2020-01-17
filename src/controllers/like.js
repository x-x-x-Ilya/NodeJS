const likeService = require('../services/like');

class LikeController {

  create(req, res) {
    try {
      return res.status(201).json(likeService.prototype.create(req.body), 'Like Create Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  delete(req, res) {
    try {
      return res.status(201).json(likeService.prototype.delete(req.body), 'Like Delete Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

}

module.exports = LikeController;
