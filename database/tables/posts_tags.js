const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const PostTag = sequelize.define("posts_tags", {
            id:      { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            post_id: { type: Sequelize.INTEGER, allowNull: false},
            tag_id:  { type: Sequelize.INTEGER, allowNull: false},
    },
        {/* options*/}
    );
};

module.exports = PostTag;