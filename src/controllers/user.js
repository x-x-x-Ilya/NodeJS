const userService = require('../services/user');

class UserController {
  create(req, res) {
    const { email } = req.body;
    const { first_name } = req.body;
    const { last_name } = req.body;
    const { password } = req.body;

    try {
      const user = userService.prototype.createUser(email, first_name, last_name, password);
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
      const answer = userService.deleteUser(/* params */);
      return res.status(201).json(answer, 'User Delete Successfully', 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  get(req, res) {
    try {
      /* params */
      const User = userService.getUser(/* params */);
      return res.status(201).json(User, 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }

  getAll(req, res) {
    try {
      const allUsers = userService.getAllUser();
      return res.status(201).json(allUsers, 201, 'success');
    } catch (error) {
      return res.status(error.status).json(error);
    }
  }
}
module.exports = UserController;
