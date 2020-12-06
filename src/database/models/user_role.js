import { INTEGER, Model } from 'sequelize';
import sequelize from '../sequelize';

class UserRole extends Model {}

UserRole.init(
    {
        userId: { type: INTEGER, allowNull: false, field: 'user_id' },
        roleId: { type: INTEGER, allowNull: false, field: 'role_id' },
    },
    {
        sequelize: sequelize, // We need to pass the connection instance
        modelName: 'users_roles', // We need to choose the model name
    },
);

UserRole.associate = models => {
    UserRole.belongsTo(models.User, { foreignKey: 'userId' });
    UserRole.belongsTo(models.Role, { foreignKey: 'roleId' });
};

export default UserRole;
