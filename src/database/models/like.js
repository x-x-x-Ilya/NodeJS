import { INTEGER, Model } from 'sequelize';
import sequelize from '../sequelize';

class Like extends Model {}

Like.init(
    {
        //id:     { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
        userId: { type: INTEGER, allowNull: false, field: 'user_id' },
        postId: { type: INTEGER, allowNull: false, field: 'post_id' },
    },
    {
        sequelize: sequelize, // We need to pass the connection instance
        modelName: 'likes', // We need to choose the model name
    },
);

Like.associate = models => {
    Like.belongsTo(models.User, { foreignKey: 'userId' });
    Like.belongsTo(models.Post, { foreignKey: 'postId' });
};

export default Like;
