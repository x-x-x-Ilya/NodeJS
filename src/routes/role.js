const express = require('express');
const router = express.Router();

const RoleController = require('../controllers/role');
const roleController = new RoleController();

const isAuthenticated = require('../middleware/isAuthenticated');

router.get('/', (req, res) => {res.send('/role main page');});
router.post('/create', isAuthenticated, roleController.create);
router.get('/get', roleController.get);
router.delete('/delete', isAuthenticated, roleController.delete);
router.post('/update', isAuthenticated, roleController.update);

module.exports = router;
