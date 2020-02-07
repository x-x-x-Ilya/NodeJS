const express = require('express');
const router = express.Router();

const RoleController = require('../controllers/role');
const roleController = new RoleController();

const isAuthenticated = require('../middleware/isAuthenticated');
const isAdmin = require('../middleware/isAdmin');

router.get('/', (req, res) => {res.send('/role main page');});
router.post('/create', isAuthenticated, isAdmin, roleController.create);
//router.get('/get', roleController.get);
router.delete('/delete', isAuthenticated, isAdmin, roleController.delete);
router.put('/update', isAuthenticated, isAdmin, roleController.update);

module.exports = router;
