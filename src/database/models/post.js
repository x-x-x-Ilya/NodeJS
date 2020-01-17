const Sequelize = require('sequelize');
const database = require('../sequelize');

const Post = database.define('posts', {
  id: {
    type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,
  },
  userId: { type: Sequelize.INTEGER, allowNull: false, notEmpty: true, field: 'user_id' },
  createdAt: { type: Sequelize.DATE, allowNull: false, field: 'created_at' },
  img: { type: Sequelize.STRING, allowNull: true, defaultAssignment: null },
  caption: { type: Sequelize.STRING, allowNull: true, defaultAssignment: null },
}, {/* options */});

Post.associate = (models) => {
  Post.belongsToMany(models.Tag, { foreignKey: 'post_id', as: 'tag', through: 'posts_tags' });
  Post.hasMany(models.Like, { foreignKey: 'post_id', as: 'like' });
  Post./* HasOne */belongsTo(models.User, { foreignKey: 'user_id' });
};

module.exports = Post;
