const express = require('express');
const router = express.Router();

const TagController = require('../controllers/tag');
const tagController = new TagController();

const isAuthenticated = require('../middleware/isAuthenticated');

router.get('/', (req, res) => {
    res.send('/tag main page');
});

router.post('/create', isAuthenticated, tagController.create);
router.get('/getall', tagController.getAll);
router.post('/update', isAuthenticated, tagController.update);
router.get('/get', tagController.get);

module.exports = router;
