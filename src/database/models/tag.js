const Sequelize = require('sequelize');
const database = require('../sequelize');

const Tag = database.define('tags', {
  id: {
    type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,
  },
  name: {
    type: Sequelize.STRING, allowNull: false, min: 0, notEmpty: true,
  },
}, {/* options */});

Tag.associate = (models) => {
  Tag.belongsToMany(models.Post, { through: 'posts_tags', foreignKey: 'tagId', as: 'posts' });
};

module.exports = Tag;
