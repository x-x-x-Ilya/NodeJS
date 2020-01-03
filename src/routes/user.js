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



module.exports = router;
