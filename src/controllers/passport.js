const passport = require('passport');
const User = require('../repositories/user');

class PassportController {

    async login(req, res, next) {
        await passport.authenticate('local',
            function (err, user, info) {
                try {
                    if (!user) return res.status(404).json('Incorrect username or password');
                    req.logIn(user, function (err) {
                        if (err) {
                            return res.status(404).json(err);
                        }
                        return res.status(200).json('You logged');
                    });
                } catch (err) {
                    return res.status(404).json(err);
                }
            })(req, res, next)
    }

    async logout(req, res, next) {
        try {
            await req.logout();
            return res.status(200).json('You Logout');
        } catch (e) {
            return res.status(404).json('Error, maybe you not logged');
        }

    }

    async register(req, res, next) {
        await User.prototype.createUser(req.body).then((user) => {
             req.logIn(user, function (err) {
                if (err) return res.status(404).json(err);
                else return res.status(200).json('You create new account and logged in');
            });
        });
    }

}

module.exports = PassportController;