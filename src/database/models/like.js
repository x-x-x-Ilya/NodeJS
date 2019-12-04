var Sequelize = require("sequelize");
var sequelize = require("../sequelize");

module.exports = (sequelize, DataTypes) => {
    var Like = sequelize.define('likes', {
        id:      { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
        user_id: { type: Sequelize.INTEGER, allowNull: false },
        post_id: { type: Sequelize.INTEGER, allowNull: false },
    },
        {/* options*/}
    );

    Like.associate =  function(models) {
            Like./*HasOne*/belongsTo(models.User, { foreignKey: 'user_id' });
            Like./*HasOne*/belongsTo(models.Post, { foreignKey: 'post_id' });
         };

    return Like;
};