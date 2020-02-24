const express = require('express');
const router = express.Router();

const validator = require("../middleware/joi");
const schemas = require("../middleware/validation schemas/schemas");

const isAuthenticated = require('../middleware/isAuthenticated');
const isNotAuthenticated = require('../middleware/isNotAuthenticated');

const Passport = require('../controllers/PassportController');
const passportController = new Passport();

router.post(
    '/login',
    isNotAuthenticated,
    validator({
        body: schemas.login
    }),
    passportController.login);

router.post('/register',
    isNotAuthenticated,
    validator({
    body: schemas.registration
}),
    passportController.register);

router.get('/logout', isAuthenticated, passportController.logout);

module.exports = router;