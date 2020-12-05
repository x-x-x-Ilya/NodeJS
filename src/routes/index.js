import { Router } from 'express';
const router = Router();

import isAuthenticated from '../middleware/isAuthenticated';
import isAdmin from '../middleware/isAdmin';

import userRouter from './user';
import likeRouter from './like';
import postRouter from './post';
import tagRouter from './tag';
import roleRouter from './role';
import passportRouter from './passport';

router.get('/', (req, res) => res.status(201).json('main page'));
router.use('/user', isAuthenticated, userRouter);
router.use('/like', isAuthenticated, likeRouter);
router.use('/post', isAuthenticated, postRouter);
router.use('/tag', isAuthenticated, tagRouter);
router.use('/role', isAuthenticated, /*isAdmin,*/ roleRouter);
router.use('/', passportRouter);

export default router;
