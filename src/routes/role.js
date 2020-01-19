const express = require('express');

const RoleController = require('../controllers/role');

const roleController = new RoleController();

const router = express.Router();

router.get('/', (req, res) => {
    res.send('/role main page');
});

router.post('/create', roleController.create);
router.get('/get', roleController.get);
router.delete('/delete', roleController.delete);
router.post('/update', roleController.update);

module.exports = router;
