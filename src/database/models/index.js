const User = require('./user');
const Post = require('./post');
const Like = require('./like');
const Role = require('./role');
const Tag = require('./tag');
const PostTag = require('./post_tag');
const UserRole = require('./user_role');

const db = {
  User, Post, Like, Role,
  Tag, PostTag, UserRole
};

exports.init = () => {
  Object.keys(db).forEach((modelName) => {
    db[modelName].associate && db[modelName].associate(db);
  });
};
