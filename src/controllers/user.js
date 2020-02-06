const UserService = require('../services/user');

const userServices = new UserService();

class UserController {

  async create(req, res) {
    try {
       return res.status(200).json(await userServices.createUser(req.body));
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async get(req, res) {
    try {
      return res.status(200).json(await userServices.getUser(req.body));
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async getAll(req, res) {
    try {
      return res.status(200).json(await userServices.getAllUser());
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async sendDeleteRequest(req, res) {
    try {
      return res.status(200).json(await userServices.sendDeleteRequest(req.user));
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async update(req, res) {
    try {
        return res.status(200).json(await userServices.updateUser(req.body, req.user));
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async deleteUser(req, res) {
    try {
      return res.status(200).json(await userServices.deleteUser(req.body, req.user));
    } catch (error) {
      return res.status(404).json(error);
    }
  }

}

module.exports = UserController;
