const Sequel = require("sequelize");
let db = require("../sequelize");

    let User = db.define('users', {
            id:         {type: Sequel.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            email:      {type: Sequel.STRING,  allowNull: false, UNIQUE_KEY: true},
            password:   {type: Sequel.STRING,  allowNull: false,  min: 8, notEmpty: true},
            first_name: {type: Sequel.STRING,  allowNull: false,  min: 0, max: 30, notEmpty: true},
            last_name:  {type: Sequel.STRING,  allowNull: false,  min: 0, max: 30, notEmpty: true},
            delete_req: {type: Sequel.BOOLEAN, allowNull: false , DEFAULT: false, notEmpty: false},
    }, {/* options*/});

    User.associate =  function(models) {
        User.hasMany(models.Post,       {foreignKey: `user_id`, as: `posts`});
        User.hasMany(models.Like,       {foreignKey: `user_id`, as: `likes`});
        User.belongsToMany(models.Role, {foreignKey: `user_id`, as: `roles`, through: `users_roles`});
    };

module.exports = User;