import Sequelize from 'sequelize';
import sequelize from '../sequelize';

class Like extends Sequelize.Model {}
Like.init(
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: { type: Sequelize.INTEGER, allowNull: false, field: 'user_id' },
        postId: { type: Sequelize.INTEGER, allowNull: false, field: 'post_id' },
    },
    {
        sequelize: sequelize, // We need to pass the connection instance
        modelName: 'likes', // We need to choose the model name
    },
);

console.log('Like =', Like === sequelize.models.likes); // true

export default Like;
