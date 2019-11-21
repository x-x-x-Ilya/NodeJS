const sequelize = require("sequelize");
const likes = sequelize.define('likes', {
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
    post_id: {
        type: Sequelize.INT,
        allowNull: false
    },
}, {
    // options
});
module.exports = likes;