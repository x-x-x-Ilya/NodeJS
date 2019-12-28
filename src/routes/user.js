let express = require('express');

const UserController = require("../controllers/user");

const userController = new UserController();


const router = express.Router();

router.get('/', function (req, res) {
    res.send('try to see that');
  });


router.post('/user', userController.create);

module.exports = router;