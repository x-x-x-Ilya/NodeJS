import { INTEGER, STRING } from 'sequelize';
import { define } from '../sequelize';

const Role = define('roles', {
    id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: { type: STRING, allowNull: false },
});

Role.associate = models => {
    Role.belongsToMany(models.User, {
        foreignKey: 'roleId',
        as: 'users',
        through: 'users_roles',
    });
};

export default Role;
