const sequelize = require("sequelize");
const posts = sequelize.define('posts', {
    id: {
        type: Sequelize.INT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INT,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultAssignment: NULL
    },
    caption: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultAssignment: NULL
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false,
    }
}, {
    // options
});
module.exports = posts;