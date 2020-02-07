module.exports = async (req, res, next) => {

    let roles = await req.user.getRoles();
    if (!roles) {
        res.status(404).json('verifyRoleError verifyRole -> error -> user roles not found');
    }

    const parsingArrayRoles = (roles, typeOfRole) => {
        return roles.some(role => {
            return role.dataValues.name === typeOfRole;
        });
    };

    if (parsingArrayRoles(roles, "Admin"))
        return next();

    res.status(401).json("authAdminError, you are not admin");
};