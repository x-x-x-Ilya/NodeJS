import { Router } from 'express';
const router = Router();

import isAdmin from '../middleware/isAdmin';

import UserController from '../controllers/UserController';
const userController = new UserController();

router.get(`/get`, userController.get);
router.get(`/:id`, userController.getById);
router.put('/update', userController.update);

router.post('/create', isAdmin, userController.create);
router.get('/getAll', isAdmin, userController.getAll);
router.delete('/deleteUsers', isAdmin, userController.deleteUser);

export default router;
