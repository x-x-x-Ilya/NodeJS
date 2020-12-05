import { Router } from 'express';
const router = Router();

import RoleController from '../controllers/RoleController';
const roleController = new RoleController();

router.post('/create', roleController.create);
router.delete('/delete', roleController.delete);
router.put('/update', roleController.update);

export default router;
