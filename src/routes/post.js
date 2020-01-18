const express = require('express');

const PostController = require('../controllers/post');

const Controller = new PostController();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('/post main page');
});


router.post('/create', Controller.create);
router.post('/update', Controller.update);
router.get('/getall', Controller.getAll);
router.delete('/delete', Controller.delete);
router.get('/get', Controller.get);
router.get('/news', Controller.getAllPostsAsNews);   // to check news


module.exports = router;
