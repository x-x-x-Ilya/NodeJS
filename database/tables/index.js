var sequelize = require("../sequelize");

var User = sequelize.import(".users");
var Post = sequelize.import(".posts");
var Like = sequelize.import(".likes");
var Role = sequelize.import(".roles");
var Tag = sequelize.import(".tags");
var PostTag = sequelize.import(".posts_tags");
var UserRole = sequelize.import(".users_roles");

var db = {User, Post, Like, Role, Tag, PostTag, UserRole};

Object.keys(db).forEach(modelName => {
    db[modelName].associate &&  db[modelName].associate(db);
});

db.sequelize =  sequelize;
module.exports = db;