const passport = require('passport');
const User = require('../repositories/UserRepository');

class PassportController {
    async login(req, res, next) {
        await passport.authenticate('local', function (err, user, info) {
            try {
                if (!user)
                    return res
                        .status(404)
                        .json('Incorrect username or password');
                req.logIn(user, function (err) {
                    if (err) {
                        return res.status(404).json(err);
                    }
                    return res.status(200).json('You logged');
                });
            } catch (error) {
                return res.status(404).json(error);
            }
        })(req, res, next);
    }

    async logout(req, res) {
        try {
            await req.logout();
            return res.status(200).json('You Logout');
        } catch (error) {
            return res.status(404).json(error);
        }
    }

    async register(req, res) {
        try {
            const user = await User.prototype.createUser(req.body);
            await req.logIn(user, function (err) {
                return err
                    ? res.status(404).json(err)
                    : res
                          .status(200)
                          .json('You create new account and logged in');
            });
        } catch (error) {
            return res.status(404).json(error);
        }
    }
}

module.exports = PassportController;
