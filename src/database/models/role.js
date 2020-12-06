import { INTEGER, STRING, Model } from 'sequelize';
import sequelize from '../sequelize';

class Role extends Model {}

Role.init(
    {
        id: {
            type: INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: { type: STRING, allowNull: false },
    },
    {
        sequelize: sequelize,
        modelName: 'roles',
    },
);

Role.associate = models => {
    Role.belongsToMany(models.User, {
        foreignKey: 'roleId',
        as: 'users',
        through: 'users_roles',
    });
};

export default Role;
