const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');
const userController = new UserController();

const isAuthenticated = require('../middleware/isAuthenticated');

router.get('/', (req, res) => {res.send('/user main page');});
router.post('/create', userController.create);
router.get('/get', userController.get);
router.get('/getall',isAuthenticated, userController.getAll);
router.post('/deleteUser', isAuthenticated,/*isAdmin*/ userController.deleteUser);
router.post('/sendDeleteRequest', isAuthenticated, userController.sendDeleteRequest);
router.put('/update', isAuthenticated, userController.update);

module.exports = router;
