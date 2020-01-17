const Sequelize = require('sequelize');
const database = require('../sequelize');

const UserRole = database.define('users_roles', {
  id: {
    type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,
  },
  userId: { type: Sequelize.INTEGER, allowNull: false, field: 'user_id' },
  roleId: { type: Sequelize.INTEGER, allowNull: false, field: 'role_id' },
}, {/* options */});

UserRole.associate = (models) => {
  UserRole.belongsTo(models.User, { foreignKey: 'user_id' });
  UserRole.belongsTo(models.Role, { foreignKey: 'role_id' });
};

module.exports = UserRole;
