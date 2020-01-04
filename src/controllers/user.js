const userService = require('../services/user');

class Data {
  constructor(findingField, id, email, firstName, lastName, password, delete_req) {
    this.findingField = findingField;
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.delete_req = delete_req;
  }
}

class UserController {

  async create(req, res) {

    try {
      const findingField  = req.body.findingField;
      const id = req.body.id;
      const email = req.body.email;
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const password = req.body.password;

      const data = new Data(findingField, id, email, firstName, lastName, password);

      await userService.prototype.createUser(data).then(answer);
      return res.status(answer);
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async get(req, res) {

    try {
      const findingField  = req.body.findingField;
      const id = req.body.id;
      const email = req.body.email;
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const password = req.body.password;

      const data = new Data(findingField, id, email, firstName, lastName, password);
      await userService.prototype.getUser(data).then(answer);
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
      const findingField  = req.body.findingField;
      const id = req.body.id;
      const email = req.body.email;
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const password = req.body.password;

      const data = new Data(findingField, id, email, firstName, lastName, password);

      await userService.prototype.deleteUser(data);
      return res.status(201).json('User Delete Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async update(req, res) {

    try {
      const findingField  = req.body.findingField;
      const id = req.body.id;
      const email = req.body.email;
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const password = req.body.password;

      const data = new Data(findingField, id, email, firstName, lastName, password);

      await userService.prototype.updateUser(data);
      return res.status(201).json('User Delete Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }
}
module.exports = UserController;
