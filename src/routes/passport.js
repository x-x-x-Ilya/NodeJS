import { Router } from 'express';
const router = Router();

import validator from '../middleware/joi';
import schemas from '../middleware/validation schemas/schemas';

import isAuthenticated from '../middleware/isAuthenticated';
import isNotAuthenticated from '../middleware/isNotAuthenticated';

import Passport from '../controllers/PassportController';
const passportController = new Passport();

router.post(
    '/login',
    isNotAuthenticated,
    validator({ body: schemas.login }),
    passportController.login,
);

router.post(
    '/register',
    isNotAuthenticated,
    validator({
        body: schemas.registration,
    }),
    passportController.register,
);

router.get('/logout', isAuthenticated, passportController.logout);

export default router;
