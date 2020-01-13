const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const PostTag = sequelize.define('posts_tags', {
  id: {
    type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,
  },
  postId: { type: Sequelize.INTEGER, allowNull: false, field: 'post_id' },
  tagId: { type: Sequelize.INTEGER, allowNull: false, field: 'tag_id' },
}, {/* options */});

PostTag.associate = (models) => {
  PostTag.belongsTo(models.Post, { foreignKey: 'post_id' });
  PostTag.belongsTo(models.Tag, { foreignKey: 'tag_id' });
};

module.exports = PostTag;
