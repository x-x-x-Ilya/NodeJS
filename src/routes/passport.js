const express = require('express');
const router = express.Router();

const isAuthenticated = require('../middleware/isAuthenticated');
const isNotAuthenticated = require('../middleware/isNotAuthenticated');

const Passport = require('../controllers/PassportController');
const passportController = new Passport();

router.post('/login', isNotAuthenticated, passportController.login);
router.post('/register', isNotAuthenticated, passportController.register);

router.get('/logout', isAuthenticated, passportController.logout);

module.exports = router;