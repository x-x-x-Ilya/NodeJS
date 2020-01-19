const likeService = require('../services/like');

class LikeController {

  create(req, res) {
      likeService.create(req.body).then(() => {
        return res.status(201).json('Like has been created successfully');
      }).catch((error) => {
        return res.status(404).json(error);
      });
  }

  async delete(req, res) {
    try {
       await likeService.delete(req.body);
       return res.status(201).json('Like has been deleted successfully');
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  getAll(req, res) {
    try {
      likeService.getAll(req.body).then(() => {
        return res.status(201).json('Likes have been gated successfully');
      });
      } catch (error) {
      return res.status(404).json(error);
    }
  }


}

module.exports = LikeController;
