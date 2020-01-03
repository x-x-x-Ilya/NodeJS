const likeService = require('../services/like');

class LikeController {
  create(req, res) {
    // res.send(req.params);     // req.body === {};
    try {
      return res.status(201).json(likeService.prototype.create(req.body), 'Like Create Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  delete(req, res) {
    try {
      const answer = likeService.prototype.delete(req.body);
      return res.status(201).json(answer, 'Like Delete Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }
}

module.exports = LikeController;
