const express = require('express');
const router = express.Router();

const isAuthenticated = require('../middleware/isAuthenticated');

const TagController = require('../controllers/TagController');
const tagController = new TagController();

router.post('/create', isAuthenticated, tagController.create);
router.get('/getAll', tagController.getAll);
router.post('/update', isAuthenticated, tagController.update);
router.get('/get', tagController.get);

module.exports = router;
