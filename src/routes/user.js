let express = require('express');
const UserController = require("../controllers/user");

const userController = new UserController();


let router = express.Router();

router.get('/', function (req, res) {
    res.send('respond with a resource');
  });

router.post('/user', userController.create);

module.exports = router;