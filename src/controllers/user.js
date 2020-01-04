const userService = require('../services/user');

class UserController {

  async create(req, res) {
    class Data {
      constructor(email, firstName, lastName, password) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
      }
    }

    const { email } = req.body;
    const { firstName } = req.body;
    const { lastName } = req.body;
    const { password } = req.body;
    const data = new Data(email, firstName, lastName, password);

    try {
      return await res.status(userService.prototype.createUser(data));
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  get(req, res) {
    class Data {
      constructor(findingField, id, email, firstName, lastName, password) {
        this.findingField = findingField;
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
      }
    }

    try {
      const { findingField } = req.body;
      const { id } = req.body;
      const { email } = req.body;
      const { firstName } = req.body;
      const { lastName } = req.body;
      const { password } = req.body;
      const data = new Data(findingField, id, email, firstName, lastName, password);
      // return res.status(201).json(userService.prototype.getUser(findingField, field), 201, 'success');
      return res.json(userService.prototype.getUser(data), 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async getAll(req, res) {
    try {
      //const allUsers = userService.prototype.getAllUser();
      //return res.status(201).json(allUsers, 201, 'success');
      return await userService.prototype.getAllUser();
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async delete(req, res) {

    class Data {
      constructor(findingField, id, email, firstName, lastName, password) {
        this.findingField = findingField;
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
      }
    }
    try {
      const { findingField } = req.body;
      const { id } = req.body;
      const { email } = req.body;
      const { firstName } = req.body;
      const { lastName } = req.body;
      const { password } = req.body;
      const data = new Data(findingField, id, email, firstName, lastName, password);

      await userService.prototype.deleteUser(data);
      return res.status(201).json('User Delete Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  async update(req, res) {
    class Data {
      constructor(findingField, id, email, firstName, lastName, password) {
        this.findingField = findingField;
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
      }
    }
    try {
      const { findingField } = req.body;
      const { id } = req.body;
      const { email } = req.body;
      const { firstName } = req.body;
      const { lastName } = req.body;
      const { password } = req.body;
      const data = new Data(findingField, id, email, firstName, lastName, password);

      await userService.prototype.updateUser(data);
      return res.status(201).json('User Delete Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

}
module.exports = UserController;
