const express = require('express');
const router = express.Router();

const PostController = require('../controllers/PostController');
const Controller = new PostController();

router.post('/create', Controller.create);
router.get('/get', Controller.get);
router.delete('/delete', Controller.delete);
router.put('/update', Controller.update);
router.get('/getAll', Controller.getAllPosts);

module.exports = router;
