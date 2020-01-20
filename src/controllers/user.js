//const passport = require('passport');
const passport = require('../middleware/passport-middleware');

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

  async delete(req, res) {
    try {
      return res.status(200).json(await userServices.deleteUser(req.body));
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  async update(req, res) {
    try {
        return res.status(200).json(await userServices.updateUser(req.body));
    } catch (error) {
      return res.status(404).json(error);
    }
  }



  login(req, res, next) {
    passport.authenticate('local',
        function(err, user, info) {
          return err
              ? next(err)
              : user
                  ? req.logIn(user, function(err) {
                    return err
                        ? next(err)
                        : res.redirect('/private');
                  })
                  : res.redirect('/');
        }
    )(req, res, next);
  };

  logout(req, res) {
    req.logout();
    res.redirect('/');
  };

}

module.exports = UserController;
