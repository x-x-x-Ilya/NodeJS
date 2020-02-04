const express = require('express');

const Passport = require('../controllers/passport');
const passportController = new Passport();
const isAuthenticated = require('../middleware/isAuthenticated');
const isNotAuthenticated = require('../middleware/isNotAuthenticated');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('/passport main page');
});

router.post('/login', isNotAuthenticated, passportController.login);
router.get('/logout', isAuthenticated, passportController.logout);
router.post('/register', isNotAuthenticated, passportController.register);


module.exports = router;

