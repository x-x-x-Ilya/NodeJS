export default async (req, res, next) => {
    try {
        return !req.isAuthenticated()
            ? next()
            : res.status(404).json('Logout to get access');
    } catch (error) {
        return res.status(404).json(error);
    }
};
