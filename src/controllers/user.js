const userService = require('../services/user');

class UserController {
  create(req, res) {
    const { email } = req.body;
    const { firstName } = req.body;
    const { lastName } = req.body;
    const { password } = req.body;

    try {
      const user = userService.prototype.createUser(email, firstName, lastName, password);
      // return  res.status(201).json(user, "User Create Successfully", 201, "success");
      return res.send(user);
    } catch (error) {
      return res.status(666);
      // return res.status(error.status).json(error);
    }
  }


  delete(req, res) {
    try {
      // params
      const answer = userService.prototype.deleteUser(/* params */);
      return res.status(201).json(answer, 'User Delete Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  get(req, res) {
    try {
      /* params */
      const User = userService.prototype.getUser(/* params */);
      return res.status(201).json(User, 201, 'success');
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
