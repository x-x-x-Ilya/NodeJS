const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const Tag = sequelize.define('tags', {
  id: {
    type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,
  },
  name: {
    type: Sequelize.STRING, allowNull: false, min: 0, notEmpty: true,
  },
}, {/* options */});

Tag.associate = function (models) {
  Tag.belongsToMany(models.Post, { through: 'posts_tags', foreignKey: 'tags_id', as: 'posts' });
};

module.exports = Tag;
