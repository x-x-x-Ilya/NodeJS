const express = require('express');

const TagController = require('../controllers/tag');

const tagController = new TagController();

const router = express.Router();

router.get('/', (req, res) => {
    res.send('/tag main page');
});

router.post('/create', tagController.create);
router.get('/get', tagController.get);
router.get('/getall', tagController.getAll);
//router.delete('/delete', tagController.delete);
router.put('/update', tagController.update);

module.exports = router;
