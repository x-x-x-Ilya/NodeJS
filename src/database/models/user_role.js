const Sequelize = require("sequelize");
let sequelize = require("../sequelize");

    let UserRole = sequelize.define('users_roles', {
        id:      { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
        user_id: { type: Sequelize.INTEGER, allowNull: false },
        role_id: { type: Sequelize.INTEGER, allowNull: false },
    }, {/* options*/});

    UserRole.associate = function (models) {
        UserRole.belongsTo(models.User, { foreignKey: 'user_id' });
        UserRole.belongsTo(models.Role, { foreignKey: 'role_id' });
    };

    module.exports =  UserRole;