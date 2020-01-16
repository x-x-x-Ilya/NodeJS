const userService = require('../services/user');

let answer;
class UserController {

  async create(req, res) {

    try {
      await userService.prototype.createUser(req.body).then(answer);  // user_id && created_at == ?
      return res.status(answer).json('user created successfully');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async get(req, res) {

    try {
      await userService.prototype.getUser(req.body).then(answer);
      return res.status(answer);
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async getAll(req, res) {
    try {
      await userService.prototype.getAllUser().then(answer);
      return res.status(answer);
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async delete(req, res) {
    try {
      await userService.prototype.deleteUser(req.body).then(answer);
      return res.status(answer).json('User Delete request added successfully');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async update(req, res) {
    try {
      await userService.prototype.updateUser(req.body).then(answer);
      return res.status(answer).json('User Updated Successfully');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

}

module.exports = UserController;
