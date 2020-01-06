const express = require('express');

const PostController = require('../controllers/post');

const Controller = new PostController();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('/post main page');
});


router.post('/create', Controller.create);
router.get('/getall', Controller.getAll);
router.delete('/delete', Controller.delete);
router.get('/get', Controller.get);
//router.get('/getallGlobal', Controller.getAllGlobal);   // to check news


module.exports = router;
