const likeService = require('../services/like');

class LikeController {

  create(req, res) {
    try {
      likeService.prototype.create(req.body).then(() => {
        return res.status(201).json('Like has been created successfully');
      });
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  delete(req, res) {
    try {
      likeService.prototype.delete(req.body).then(() => {
        return res.status(201).json('Like has been deleted successfully');
      });
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  getAll(req, res) {
    try {
      likeService.prototype.getAll(req.body).then(() => {
        return res.status(201).json('Likes have been gated successfully');
      });
      } catch (error) {
      return res.status(404).json(error);
    }
  }


}

module.exports = LikeController;
