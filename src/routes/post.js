let express = require('express');

const PostController = require("../controllers/post");
const PostController = new PostController();

const router = express.Router();

router.get('/', function (req, res) {
    res.send('/post main page');
});

// how to take params?
router.post('/create', PostController.create);
router.get('/getall', PostController.getAll);
router.delete('/delete', PostController.delete);
router.get('/get', PostController.get);


module.exports = router;