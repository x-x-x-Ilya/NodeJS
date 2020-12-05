import { Router } from 'express';
const router = Router();

import validator from '../middleware/joi';
import { post } from '../middleware/validation schemas/schemas';

import PostController from '../controllers/PostController';
const Controller = new PostController();

router.post(
    '/create',
    validator({
        body: post,
    }),
    Controller.create,
);
router.get('/get', Controller.get);
router.delete('/delete', Controller.delete);

router.put(
    '/update',
    validator({
        body: post,
    }),
    Controller.update,
);

router.get('/getAll', Controller.getAllPosts);

export default router;
