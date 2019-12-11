//var sequelize = require("../sequelize");
var User = require("./user");
var Post = require("./post");
var Like = require("./like");
var Role = require("./role");
var Tag = require("./tag");
var PostTag = require("./post_tag");
var UserRole = require("./user_role");
//var User = sequelize.import("user");
//var Post = sequelize.import("post");
//var Like = sequelize.import("like");
//var Role = sequelize.import("role");
//var Tag = sequelize.import("tag");
//var PostTag = sequelize.import("post_tag");
//var UserRole = sequelize.import("user_role");

var db = {User, Post, Like, Role, Tag, PostTag, UserRole};

Object.keys(db).forEach(modelName => {
    db[modelName].associate &&  db[modelName].associate(db);
});

module.exports = db;