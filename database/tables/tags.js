var Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    var Tag = sequelize.define("tags", {
        id:   { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
        name: { type: Sequelize.STRING, allowNull: false },
    },
         {/* options*/}
    );

    Tag.associate =  function(models) {
        Tag.belongsToMany(models.Post, {through: `post_tags`, foreignKey: `tags_id`, as: `posts`});
    };
};

module.exports = Tag;