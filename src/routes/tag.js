import { Router } from 'express';
const router = Router();

import isAuthenticated from '../middleware/isAuthenticated';

import TagController from '../controllers/TagController';
const tagController = new TagController();

router.post('/create', isAuthenticated, tagController.create);
router.get('/getAll', tagController.getAll);
router.post('/update', isAuthenticated, tagController.update);
router.get('/get', tagController.get);

export default router;
