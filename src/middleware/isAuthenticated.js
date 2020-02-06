module.exports = async (req, res, next) => {
    try {
        if (req.isAuthenticated()) {
            return next();
        } else
            return res.status(404).json('Login to get access');
    } catch (err) {
        return err;
    }
};


