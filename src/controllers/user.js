const userService = require('../services/user');

  let answer;
class UserController {

  async create(req, res) {

    try {
      await userService.prototype.createUser(req.body).then(answer);  // user_id && created_at == ?
      return res.status(answer);
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async get(req, res) {

    try {
      await userService.prototype.getUser(req.body).then(answer);
          res.json(answer, 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async getAll(req, res) {

    try {
      await userService.prototype.getAllUser().then(answer);
      return answer;
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async delete(req, res) {

    try {
      await userService.prototype.deleteUser(req.body);
      return res.status(201).json('User Delete Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async update(req, res) {

    try {
      await userService.prototype.updateUser(req.body);
      return res.status(201).json('User Delete Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }
}
module.exports = UserController;
