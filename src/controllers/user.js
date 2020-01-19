const UserService = require('../services/user');

const userServices = new UserService();

class UserController {

  async create(req, res) {
    try {
       const answer = await userServices.createUser(req.body);
       return res.status(200).json(answer);
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async get(req, res) {
    try {
      const answer = await userServices.getUser(req.body);
      return res.status(200).json(answer);
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const answer = await userServices.getAllUser();
      return res.status(200).json(answer);
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async delete(req, res) {
    try {
      const answer = await userServices.deleteUser(req.body);
      return res.status(200).json(answer);
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async update(req, res) {
    try {
      const answer = await userServices.updateUser(req.body);
        return res.status(200).json(answer);
    } catch (error) {
      return res.status(404).json(error);
    }
  }

}

module.exports = UserController;
