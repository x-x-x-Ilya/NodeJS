/*const User = require('../database/models/user');
const Role = require('../database/models/role');

module.exports = async (req, res, next) => {
    try {

        let userRoles =  User.getUserRoles(req.user.id);
        if (userRoles.includes('Admin')) {
             next();
        } else {
            console.log('Not enough rights.');
            return res.status(440).json('Not enough rights.');
        }
    } catch (err) {
        console.log('Internal server error.');
        return res.status(440).json(err);
    }
};*/