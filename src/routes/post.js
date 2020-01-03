const express = require('express');

const PostController = require('../controllers/post');

const Controller = new PostController();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('/post main page');
});

// how to take params?
router.post('/create', Controller.create);
router.get('/getall', Controller.getAll);
router.delete('/delete', Controller.delete);
router.get('/get', Controller.get);


module.exports = router;
