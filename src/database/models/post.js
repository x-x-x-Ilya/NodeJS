import Sequelize from 'sequelize';
import sequelize from '../sequelize';

class Post extends Sequelize.Model {}

Post.init(
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id',
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            notEmpty: true,
            field: 'user_id',
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            field: 'created_at',
        },
        img: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultAssignment: null,
            field: 'img',
        },
        caption: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultAssignment: null,
            field: 'caption',
        },
    },
    {
        sequelize: sequelize, // We need to pass the connection instance
        modelName: 'posts', // We need to choose the model name
    },
);

console.log('Post =', Post === sequelize.models.posts); // true

export default Post;
