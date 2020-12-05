import { INTEGER } from 'sequelize';
import { define } from '../sequelize';

const Like = define('likes', {
    //id:     { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
    userId: { type: INTEGER, allowNull: false, field: 'user_id' },
    postId: { type: INTEGER, allowNull: false, field: 'post_id' },
});

Like.associate = models => {
    Like.belongsTo(models.User, { foreignKey: 'userId' });
    Like.belongsTo(models.Post, { foreignKey: 'postId' });
};

export default Like;
