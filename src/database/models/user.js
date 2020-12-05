import { INTEGER, STRING, BOOLEAN } from 'sequelize';
import { define } from '../sequelize';

const User = define('users', {
    id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    email: { type: STRING, allowNull: false, UNIQUE_KEY: true },
    password: {
        type: STRING,
        allowNull: false,
        min: 8,
        notEmpty: true,
    },
    firstName: {
        type: STRING,
        allowNull: false,
        min: 0,
        max: 30,
        notEmpty: true,
        field: 'first_name',
    },
    lastName: {
        type: STRING,
        allowNull: false,
        min: 0,
        max: 30,
        notEmpty: true,
        field: 'last_name',
    },
    deleteReq: {
        type: BOOLEAN,
        allowNull: false,
        DEFAULT: false,
        notEmpty: false,
        field: 'delete_req',
    },
});

User.associate = models => {
    User.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
    User.hasMany(models.Like, { foreignKey: 'userId', as: 'likes' });
    User.belongsToMany(models.Role, {
        foreignKey: 'userId',
        as: 'roles',
        through: 'users_roles',
    });
};

export default User;
