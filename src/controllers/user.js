const userService = require('../services/user');

class UserController {

  async create(req, res) {
    try {
       await userService.prototype.createUser(req.body).then((answer) => {
         if(answer === true)
         return res.status(200).json("User has been create successfully");
         if(answer === false)
           return res.status(404).json("User has not been created");
      });
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async get(req, res) {
    try {
      await userService.prototype.getUser(req.body).then(() => {
        //console.log('answer is ', answer);
        //if(answer === true)
          return res.status(200).json('User has been fined');
        //if(answer === false)
          //return res.status(404).json("User has not been fined");
      });
    } catch (error) {
      console.log(error);
      return res.status(404).json(error);
    }
  }

  async getAll(req, res) {
    try {
      await userService.prototype.getAllUser().then((answer) => {
        return res.status(200).json("List of users has been gated");
      });
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async delete(req, res) {
    try {
      await userService.prototype.deleteUser(req.body).then((/*answer*/) => {
        //if (answer === true)
          return res.status(200).json('User has been deleted successfully');
        //if (answer === false)
          //return res.status(404).json('User has been not deleted');
      });
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async update(req, res) {
    try {
      await userService.prototype.updateUser(req.body).then((answer) => {
        //if (answer === true) {
          return res.status(200).json('User has been updated successfully');
        //}
      });
    } catch (error) {
      return res.status(404).json(error);
    }
  }

}

module.exports = UserController;
