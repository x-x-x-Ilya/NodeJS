var sequelize = require("../sequelize");

var User = sequelize.import("user");
var Post = sequelize.import("post");
var Like = sequelize.import("like");
var Role = sequelize.import("role");
var Tag = sequelize.import("tag");
var PostTag = sequelize.import("post_tag");
var UserRole = sequelize.import("user_role");

var db = {User, Post, Like, Role, Tag, PostTag, UserRole};

Object.keys(db).forEach(modelName => {
    db[modelName].associate &&  db[modelName].associate(db);
});

db.sequelize =  sequelize;
module.exports = db;