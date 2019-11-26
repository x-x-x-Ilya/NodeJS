const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) =>  {
    var Post = sequelize.define('posts', {
        id:         { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
        user_id:    { type: Sequelize.INTEGER, allowNull: false },
        created_at: { type: Sequelize.DATE,    allowNull: false },
        img:        { type: Sequelize.STRING,  allowNull: true, defaultAssignment: NULL },
        caption:    { type: Sequelize.STRING,  allowNull: true, defaultAssignment: NULL }
    },
        {/* options*/}
    );

    Post.associate =  function(models) {
        Post.belongsToMany(models.Tag,  {foreignKey: `post_id`, as: `tags`, through: `post_tags`});
        Post.hasMany      (models.Like, {foreignKey: `post_id`, as: `like`});
    }
};

module.exports = Post;