var express = require('express');
const UserController = require("../controllers/user");

const userController = new UserController();
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;