const passport = require('../middleware/passport-middleware'); //TypeError: passport.authenticate is not a function

//const passport = require('passport'); // Error: Unknown authentication strategy "local"

//const passport = require('passport-local'); //TypeError: passport.authenticate is not a function


class PassportController {

    /*login(req, res, next) {
        passport.authenticate('local',
            function(err, user, info) {
                return err
                    ? next(err)
                    : user
                        ? req.logIn(user, function(err) {
                            return err
                                ? next(err)
                                :  res.status(200).json('it is OK')//res.redirect('/private');
                        })
                        :  res.status(200).json('User not founded')//res.redirect('/');
            }
        )(req, res, next);
    }*/

    login(req, res) {
       try {
           passport.authenticate('local',
               function (err, user) {
                   if (err) return res.status(404).json(err);//next(err);
                   if (!user) return res.status(404).json('User not founded'); //res.redirect('/');
                   console.log('user =', user); //не заходит в этот код

                   req.logIn(user, function (err) {
                       if (err) return res.status(404).json(err);//next(err);
                       return res.status(200).json('it is OK');//res.redirect('/private');
                       //return res.json(new Response("Authorization successful", 200));
                   })
               }
           );
           return res.status(200).json('last line response');
       }
       catch (e) {
           return res.status(404).json(e);
       }
    };
        //)};



    /*
    login = function(req, res, next) {
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
*/

    logout(req, res) {
        //req.logout();
        console.log(req.user);
        res.status(200).json('logout is working')
    };

    register(req, res, next) {
        let user = new User({ username: req.body.username, password: req.body.password});
        user.save(function(err) {
            return err
                ? next(err)
                : req.logIn(user, function(err) {
                    return err
                        ? next(err)
                        : res.redirect('/private');
                });
        });
    };

}

module.exports = PassportController;