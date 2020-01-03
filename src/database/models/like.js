const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const Like = sequelize.define('likes', {
  id: {
    type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,
  },
  user_id: { type: Sequelize.INTEGER, allowNull: false },
  post_id: { type: Sequelize.INTEGER, allowNull: false },
}, {/* options */});

Like.associate = function (models) {
  Like.belongsTo(models.User, { foreignKey: 'user_id' });
  Like.belongsTo(models.Post, { foreignKey: 'post_id' });
};

module.exports = Like;
