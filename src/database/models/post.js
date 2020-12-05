import { INTEGER, DATE, STRING } from 'sequelize';
import { define } from '../sequelize';

const Post = define('posts', {
    id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: INTEGER,
        allowNull: false,
        notEmpty: true,
        field: 'user_id',
    },
    createdAt: { type: DATE, allowNull: false, field: 'created_at' },
    img: { type: STRING, allowNull: true, defaultAssignment: null },
    caption: {
        type: STRING,
        allowNull: true,
        defaultAssignment: null,
    },
});

Post.associate = models => {
    Post.belongsToMany(models.Tag, {
        foreignKey: 'postId',
        as: 'tags',
        through: 'posts_tags',
    });
    Post.hasMany(models.Like, { foreignKey: 'postId', as: 'like' });
    Post.belongsTo(models.User, { foreignKey: 'userId' });
};

export default Post;
