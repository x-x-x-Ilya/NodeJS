const Sequel = require('sequelize');
const database = require('../sequelize');

const User = database.define('users', {
  id: {
    type: Sequel.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true,
  },
  email: { type: Sequel.STRING, allowNull: false, UNIQUE_KEY: true
  },
  password: {
    type: Sequel.STRING, allowNull: false, min: 8, notEmpty: true,
  },
  firstName: {
    type: Sequel.STRING, allowNull: false, min: 0, max: 30, notEmpty: true, field: 'first_name'
  },
  lastName: {
    type: Sequel.STRING, allowNull: false, min: 0, max: 30, notEmpty: true, field: 'last_name'
  },
  deleteReq: {
    type: Sequel.BOOLEAN, allowNull: false, DEFAULT: false, notEmpty: false, field: 'delete_req'
  },
}, {/* options */});

User.associate = (models) => {
  User.hasMany(models.Post, { foreignKey: 'user_id', as: 'posts' });
  User.hasMany(models.Like, { foreignKey: 'user_id', as: 'likes' });
  User.belongsToMany(models.Role, { foreignKey: 'user_id', as: 'roles', through: 'users_roles' });
};

module.exports = User;
