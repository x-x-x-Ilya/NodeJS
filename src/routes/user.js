const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user');
const userController = new UserController();

const isAuthenticated = require('../middleware/isAuthenticated');
const isAdmin = require('../middleware/isAdmin');

router.get('/', (req, res) => {res.send('/user main page');});
router.post('/create', isAuthenticated, isAdmin, userController.create);
router.get('/get', userController.get);
router.get('/getAll',isAuthenticated, isAdmin, userController.getAll);
router.delete('/deleteUsers', isAuthenticated, isAdmin, userController.deleteUser);
router.put('/update', isAuthenticated, userController.update);

module.exports = router;
