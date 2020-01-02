const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const Post = sequelize.define('posts', {
  id: {
    type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,
  },
  user_id: { type: Sequelize.INTEGER, allowNull: false, notEmpty: true },
  created_at: { type: Sequelize.DATE, allowNull: false },
  img: { type: Sequelize.STRING, allowNull: true, defaultAssignment: null },
  caption: { type: Sequelize.STRING, allowNull: true, defaultAssignment: null },
}, {/* options */});

Post.associate = function (models) {
  Post.belongsToMany(models.Tag, { foreignKey: 'post_id', as: 'tag', through: 'posts_tags' });
  Post.hasMany(models.Like, { foreignKey: 'post_id', as: 'like' });
  Post./* HasOne */belongsTo(models.User, { foreignKey: 'user_id' });
};

module.exports = Post;
