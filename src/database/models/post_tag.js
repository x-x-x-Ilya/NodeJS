import { INTEGER, Model } from 'sequelize';
import sequelize from '../sequelize';

class PostTag extends Model {}

try {
    PostTag.init(
        {
            postId: { type: INTEGER, allowNull: false, field: 'post_id' },
            tagId: { type: INTEGER, allowNull: false, field: 'tag_id' },
        },
        {
            sequelize: sequelize, // We need to pass the connection instance
            modelName: 'posts_tags', // We need to choose the model name
        },
    );

    PostTag.associate = models => {
        PostTag.belongsTo(models.Post, { foreignKey: 'postId' });
        PostTag.belongsTo(models.Tag, { foreignKey: 'tagId' });
    };
} catch (error) {
    console.log(error);
}

export default PostTag;
