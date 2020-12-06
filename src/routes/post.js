import { Router } from 'express';
const router = Router();

import validator from '../middleware/joi';
import schemas from '../middleware/validation schemas/schemas';

import PostController from '../controllers/PostController';
const Controller = new PostController();

router.post(
    '/create',
    validator({ body: schemas.createPost }),
    Controller.create,
);

router.get('/get', Controller.get);

router.delete('/delete', Controller.delete);

router.put(
    '/update',
    validator({ body: schemas.updatePost }),
    Controller.update,
);

router.get('/getAll', Controller.getAllPosts);

export default router;
