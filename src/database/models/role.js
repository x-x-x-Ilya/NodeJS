const Sequelize = require('sequelize');
const database = require('../sequelize');

const Role = database.define('roles', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: Sequelize.STRING, allowNull: false },
});

Role.associate = models => {
    Role.belongsToMany(models.User, {
        foreignKey: 'roleId',
        as: 'users',
        through: 'users_roles',
    });
};

module.exports = Role;
