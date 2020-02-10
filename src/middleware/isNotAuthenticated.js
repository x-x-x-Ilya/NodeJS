module.exports = async (req, res, next) => {
    try {
        if (req.isAuthenticated()) {
            return res.status(404).json('Logout to get access');
        } else
            return next();
    } catch (error) {
        return res.status(404).json(error);
    }
};
// НЕ ИСП-ТЬ