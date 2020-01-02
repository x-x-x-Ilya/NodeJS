const express = require('express');

const LikeController = require('../controllers/like');
// const LikeController = new LikeController();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('/like main page');
});

// how to take params?
// router.post('/create', LikeController.create);
// router.get('/getall', LikeController.getAll);
// router.delete('/delete', LikeController.delete);

module.exports = router;
