const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const Like = sequelize.define('likes', {
  id: {
    type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,
  },
  userId: { type: Sequelize.INTEGER, allowNull: false, field: 'user_id'  },
  postId: { type: Sequelize.INTEGER, allowNull: false, field: 'post_id' },
}, {/* options */});

Like.associate = (models) => {
  Like.belongsTo(models.User, { foreignKey: 'user_id' });
  Like.belongsTo(models.Post, { foreignKey: 'post_id' });
};

module.exports = Like;
