import Sequelize from 'sequelize';
import sequelize from '../sequelize';

class UserRole extends Sequelize.Model {}

UserRole.init(
    {
        userId: { type: Sequelize.INTEGER, allowNull: false, field: 'user_id' },
        roleId: { type: Sequelize.INTEGER, allowNull: false, field: 'role_id' },
    },
    {
        sequelize: sequelize, // We need to pass the connection instance
        modelName: 'users_roles', // We need to choose the model name
    },
);

console.log('UserRole =', UserRole === sequelize.models.users_roles); // true

export default UserRole;
