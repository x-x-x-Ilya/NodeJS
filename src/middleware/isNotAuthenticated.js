module.exports = async (req, res, next) => {
    try {
        return req.isAuthenticated()
            ? res.status(404).json('Logout to get access')
            : next();
    } catch (error) {
        return res.status(404).json(error);
    }
};
// НЕ ИСП-ТЬ
