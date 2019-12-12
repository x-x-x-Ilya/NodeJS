var Sequelize = require("sequelize");
var sequelize = require("../sequelize");

    const User = sequelize.define('users', {
            id:         { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            email:      { type: Sequelize.STRING,  allowNull: false, UNIQUE_KEY: true },
            password:   { type: Sequelize.STRING,  allowNull: false,  min: 8, notEmpty: true},
            first_name: { type: Sequelize.STRING,  allowNull: false,  min: 0, max: 30, notEmpty: true },
            last_name:  { type: Sequelize.STRING,  allowNull: false },
            delete_req: { type: Sequelize.BOOLEAN, allowNull: false },
    }, {/* options*/});

    User.associate =  function(models) {
        User.hasMany(models.Post,       {foreignKey: `user_id`, as: `posts`});
        User.hasMany(models.Like,       {foreignKey: `user_id`, as: `likes`});
        User.belongsToMany(models.Role, {foreignKey: `user_id`, as: `roles`, through: `users_roles`});
    };

module.exports = User;