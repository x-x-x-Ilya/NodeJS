const express = require('express');
const router = express.Router();

const isAdmin = require('../middleware/isAdmin');

const UserController = require('../controllers/UserController');
const userController = new UserController();

router.get('/get', userController.get);
router.put('/update', userController.update);

router.post('/create', isAdmin, userController.create);
router.get('/getAll', isAdmin, userController.getAll);
router.delete('/deleteUsers', isAdmin, userController.deleteUser);

module.exports = router;
