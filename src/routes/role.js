const express = require('express');
const router = express.Router();

const RoleController = require('../controllers/RoleController');
const roleController = new RoleController();

router.post('/create', roleController.create);
router.delete('/delete', roleController.delete);
router.put('/update', roleController.update);

module.exports = router;
