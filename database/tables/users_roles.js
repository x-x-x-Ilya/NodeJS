var Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    var UserRole = sequelize.define('users_roles', {
        id:      { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
        user_id: { type: Sequelize.INTEGER, allowNull: false },
        role_id: { type: Sequelize.INTEGER, allowNull: false },
    },
        {/* options*/}
    );

};

module.exports = UserRole;