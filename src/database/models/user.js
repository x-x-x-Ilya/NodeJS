import Sequelize from 'sequelize';
import sequelize from '../sequelize';

class User extends Sequelize.Model {}

User.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            field: 'id',
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            UNIQUE_KEY: true,
            field: 'email',
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                min: 8,
            },
            notEmpty: true,
            field: 'password',
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                min: 0,
                max: 30,
            },
            notEmpty: true,
            field: 'first_name',
        },
        deleteReq: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            DEFAULT: false,
            notEmpty: false,
            field: 'delete_req',
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false,
            notEmpty: true,
            field: 'last_name',
            validate: {
                min: 0,
                max: 30,
            },
        },
    },
    {
        sequelize: sequelize, // We need to pass the connection instance
        modelName: 'users', // We need to choose the model name
    },
);
// the defined model is the class itself
console.log('User =', User === sequelize.models.users); // true
export default User;
