const sequelize = require("sequelize");
const users_roles = sequelize.define('users_roles', {
        id: {
            type: Sequelize.INT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INT,
            allowNull: false
        },
        role_id: {
            type: Sequelize.INT,
            allowNull: false
        },
    }, {
        // options
    }
);
module.exports = users_roles;