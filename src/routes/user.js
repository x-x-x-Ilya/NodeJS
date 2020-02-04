const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');
const userController = new UserController();

const isAuthenticated = require('../middleware/isAuthenticated');
const isNotAuthenticated = require('../middleware/isNotAuthenticated');

router.get('/', (req, res) => {
  res.send('/user main page');
});

router.post('/create', isNotAuthenticated, userController.create);
router.get('/get', userController.get);
router.get('/getall', userController.getAll);
router.delete('/sendDeleteRequest', isAuthenticated, userController.sendDeleteRequest);
router.put('/update', isAuthenticated, userController.update);

module.exports = router;
