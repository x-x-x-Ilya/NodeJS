import { Router } from 'express';
const router = Router();

import RoleController from '../controllers/RoleController';
const roleController = new RoleController();

router.post('/create', roleController.create);
router.get('/get', roleController.get);

export default router;
