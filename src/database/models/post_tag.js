const Sequelize = require("sequelize");
var sequelize = require("../sequelize");

    const PostTag = sequelize.define("posts_tags", {
            id:      { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
            post_id: { type: Sequelize.INTEGER, allowNull: false},
            tag_id:  { type: Sequelize.INTEGER, allowNull: false},
    },
        {/* options*/}
    );
    PostTag.associate = function (models) {
        PostTag.belongsTo(models.Post, { foreignKey: 'post_id' });
        PostTag.belongsTo(models.Tag, { foreignKey: 'tag_id' });
    };

module.exports = PostTag;