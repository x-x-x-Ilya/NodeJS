import { INTEGER } from 'sequelize';
import { define } from '../sequelize';

const PostTag = define('posts_tags', {
    postId: { type: INTEGER, allowNull: false, field: 'post_id' },
    tagId: { type: INTEGER, allowNull: false, field: 'tag_id' },
});

PostTag.associate = models => {
    PostTag.belongsTo(models.Post, { foreignKey: 'postId' });
    PostTag.belongsTo(models.Tag, { foreignKey: 'tagId' });
};

export default PostTag;
