import { Router } from 'express';
const router = Router();

import isAuthenticated from '../middleware/isAuthenticated';

import TagController from '../controllers/TagController';
const tagController = new TagController();

router.post('/create', isAuthenticated, tagController.create);

export default router;
