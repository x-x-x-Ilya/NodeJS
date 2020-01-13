const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const Role = sequelize.define('roles', {
  id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
}, {/* options */});

Role.associate = (models) => {
  Role.belongsToMany(models.User, { foreignKey: 'role_id', as: 'users', through: 'users_roles' });
};

module.exports = Role;
