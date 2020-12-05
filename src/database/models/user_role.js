import { INTEGER } from 'sequelize';
import { define } from '../sequelize';

const UserRole = define('users_roles', {
    userId: { type: INTEGER, allowNull: false, field: 'user_id' },
    roleId: { type: INTEGER, allowNull: false, field: 'role_id' },
});

UserRole.associate = models => {
    UserRole.belongsTo(models.User, { foreignKey: 'userId' });
    UserRole.belongsTo(models.Role, { foreignKey: 'roleId' });
};

export default UserRole;
