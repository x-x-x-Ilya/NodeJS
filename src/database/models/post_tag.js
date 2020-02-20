const Sequelize = require('sequelize');
const database = require('../sequelize');

const PostTag = database.define('posts_tags', {
  postId: { type: Sequelize.INTEGER, allowNull: false, field: 'post_id' },
  tagId:  { type: Sequelize.INTEGER, allowNull: false, field: 'tag_id' },
});

PostTag.associate = (models) => {
  PostTag.belongsTo(models.Post, { foreignKey: 'postId' });
  PostTag.belongsTo(models.Tag,  { foreignKey: 'tagId'  });
};

module.exports = PostTag;
