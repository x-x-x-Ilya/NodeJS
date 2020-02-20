const express = require('express');
const router = express.Router();

const validator = require("../middleware/joi");
const schemas = require("../middleware/validation schemas/schemas");

const PostController = require('../controllers/PostController');
const Controller = new PostController();

router.post('/create',
    validator({
    body: schemas.post
}),
    Controller.create);
router.get('/get', Controller.get);
router.delete('/delete', Controller.delete);

router.put('/update',
    validator({
        body: schemas.post
    }),
    Controller.update);

router.get('/getAll', Controller.getAllPosts);

module.exports = router;
