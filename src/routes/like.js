const express = require('express');

const LikeController = require('../controllers/like');
const likeController = new LikeController();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('/like main page');
});

// how to take params?
router.post('/create', likeController.create);
//router.get('/getall', likeController.getAll);
router.delete('/delete', likeController.delete);

module.exports = router;
