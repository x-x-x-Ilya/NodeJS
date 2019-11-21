const sequelize = require("sequelize");
const posts_tags = sequelize.define("posts_tags", {
    id: {
        type: Sequelize.INT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    post_id: {
        type: Sequelize.INT,
        allowNull: false
    },
    tag_id: {
        type: Sequelize.INT,
        allowNull: false
    },
    }, {
        // options
    }
);
module.exports = posts_tags;