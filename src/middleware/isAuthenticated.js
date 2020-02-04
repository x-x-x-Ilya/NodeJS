module.exports = function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else
        return res.status(404).json('Login to get access');
};


