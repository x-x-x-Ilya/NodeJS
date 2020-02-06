const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post');
const Controller = new PostController();

const isAuthenticated = require('../middleware/isAuthenticated');

router.get('/', (req, res) => {res.send('/post main page');});
router.post('/create', isAuthenticated, Controller.create);
router.put('/update', isAuthenticated, Controller.update);
router.get('/getall', Controller.getAllPosts);
router.delete('/delete', isAuthenticated, Controller.delete);
router.get('/get', Controller.get);


module.exports = router;
