const Sequelize = require('sequelize');
const database = require('../sequelize');

const Like = database.define('likes', {
  id:     { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
  userId: { type: Sequelize.INTEGER, allowNull: false, field: 'user_id' },
  postId: { type: Sequelize.INTEGER, allowNull: false, field: 'post_id' },
});

Like.associate = (models) => {
  Like.belongsTo(models.User, { foreignKey: 'userId' });
  Like.belongsTo(models.Post, { foreignKey: 'postId' });
};

module.exports = Like;
