let express = require('express');

const UserController = require("../controllers/user");
const userController = new UserController();

const router = express.Router();

router.get('/', function (req, res) {
    res.send('/user main page');
  });

// how to take params?
router.post('/create', userController.create);
router.get('/getall', userController.getAll);
router.delete('/delete', userController.delete);
router.get('/get', userController.get);


module.exports = router;