module.exports = function isNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.status(404).json('Logout to get access');
    } else
        return next();
};
