const Sequelize = require('sequelize');
const database = require('../sequelize');

const Post = database.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        notEmpty: true,
        field: 'user_id',
    },
    createdAt: { type: Sequelize.DATE, allowNull: false, field: 'created_at' },
    img: { type: Sequelize.STRING, allowNull: true, defaultAssignment: null },
    caption: {
        type: Sequelize.STRING,
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

module.exports = Post;
