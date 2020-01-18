const express = require('express');

const TagController = require('../controllers/tag');

const tagController = new TagController();

const router = express.Router();

router.get('/', (req, res) => {
    res.send('/tag main page');
});

router.post('/create', tagController.create);
router.get('/getall', tagController.getAll);
router.post('/update', tagController.update);
router.get('/get', tagController.get);

module.exports = router;
