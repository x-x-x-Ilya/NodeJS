const express = require('express');
const UserController = require('../controllers/user');
const userController = new UserController();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('/user main page');
});

router.post('/create', userController.create);
router.get('/get', userController.get);
router.get('/getall', userController.getAll);
router.delete('/delete', userController.delete);
router.post('/update', userController.update);



router.post('/login', userController.login);
router.get('/logout', userController.logout);


/*
router.post('/login', passport.authenticate('local', {
      session: true,
      successRedirect: '/',
      failureRedirect: '/login',
    }),
    function (req, res) {
      res.redirect('/' + req.user.username);
    });

router.post('/logout', mustAuthenticated, (req, res) => {
  req.logOut();
  res.send({});
});

router.get('/login', function(req, res, next) {
  passport.authenticate('local',
      function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }
        req.login(user, function(err) {
          if (err) { return next(err); }
          return res.redirect('/users/' + user.username);
        });
      })(req, res, next);
});

router.get('/api/users/me',
    passport.authenticate('local', {
      session: false
    }), function (req, res) {
      res.json({
        id: req.user.id,
        username: req.user.username
      });
    });

function mustAuthenticated(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(401).send({});
  }
  next();
}
*/
module.exports = router;
