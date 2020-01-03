const userService = require('../services/user');

class UserController {

  async create(req, res) {

    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;

    try {
      //return await res.send( userService.prototype.createUser(email, firstName, lastName, password));
      //await userService.prototype.createUser(email, firstName, lastName, password);
      //return  await res.status(201).json(userService.prototype.createUser(email, firstName, lastName, password));
      return  await res.status(userService.prototype.createUser(email, firstName, lastName, password));
    } catch (error) {
      //return res.status(666);
      return res.status(error.status).json(error);
    }
  }

  get(req, res) {
    try {
      const findingField = req.body.findingField;
      const field = req.body.field;

      //return res.status(201).json(userService.prototype.getUser(findingField, field), 201, 'success');
      return res.json(userService.prototype.getUser(findingField, field), 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  delete(req, res) {
    try {
      const answer = userService.prototype.deleteUser(/* params */);
      return res.status(201).json(answer, 'User Delete Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }



  getAll(req, res) {
    try {
      const allUsers = userService.prototype.getAllUser();
      return res.status(201).json(allUsers, 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }
}
module.exports = UserController;
