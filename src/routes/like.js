const express = require('express');
const router = express.Router();

const LikeController = require('../controllers/like');
const likeController = new LikeController();

const isAuthenticated = require('../middleware/isAuthenticated');

router.get('/', (req, res) => {
  res.send('/like main page');
});

router.post('/create', isAuthenticated, likeController.create);
router.get('/getall', likeController.getAll);
router.delete('/delete', isAuthenticated, likeController.delete);

module.exports = router;
