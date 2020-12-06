import { INTEGER, STRING, BOOLEAN, Model } from 'sequelize';
import sequelize from '../sequelize';

class User extends Model {}

User.init(
    {
        id: {
            type: INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            field: 'id',
        },
        email: {
            type: STRING,
            allowNull: false,
            UNIQUE_KEY: true,
            field: 'email',
        },
        password: {
            type: STRING,
            allowNull: false,
            validate: {
                min: 8,
            },
            notEmpty: true,
            field: 'password',
        },
        firstName: {
            type: STRING,
            allowNull: false,
            validate: {
                min: 0,
                max: 30,
            },
            notEmpty: true,
            field: 'first_name',
        },
        lastName: {
            type: STRING,
            allowNull: false,
            validate: {
                min: 0,
                max: 30,
            },
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
    },
    {
        sequelize: sequelize, // We need to pass the connection instance
        modelName: 'users', // We need to choose the model name
    },
);

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
