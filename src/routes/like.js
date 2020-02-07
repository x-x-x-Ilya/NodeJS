const express = require('express');
const router = express.Router();

const LikeController = require('../controllers/like');
const likeController = new LikeController();

router.post('/create', likeController.create);
router.delete('/delete', likeController.delete);
router.get('/getAll', likeController.getAll);

module.exports = router;
