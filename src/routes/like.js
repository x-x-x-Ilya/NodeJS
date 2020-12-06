import { Router } from 'express';
const router = Router();

import LikeController from '../controllers/LikeController';
const likeController = new LikeController();

router.post('/create', likeController.create);
router.delete('/delete', likeController.delete);

export default router;
