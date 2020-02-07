const Sequelize = require('sequelize');
const database = require('../sequelize');

const UserRole = database.define('users_roles', {
  userId: {type: Sequelize.INTEGER, allowNull: false, field: 'user_id'},
  roleId: {type: Sequelize.INTEGER, allowNull: false, field: 'role_id'},
});

UserRole.associate = (models) => {
  UserRole.belongsTo(models.User, { foreignKey: 'userId' });
  UserRole.belongsTo(models.Role, { foreignKey: 'roleId' });
};

module.exports = UserRole;