var Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    var Like = sequelize.define('likes', {
        id:      { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
        user_id: { type: Sequelize.INTEGER, allowNull: false },
        post_id: { type: Sequelize.INTEGER, allowNull: false },
    },
        {/* options*/}
    );

    Like.associate =  function(models) {
        Like.hasOne(models.User, {foreignKey: `user_id`, as: `user`});
        Like.hasOne(models.Post, {foreignKey: `post_id`, as: `post`});
    }
};

module.exports = Like;