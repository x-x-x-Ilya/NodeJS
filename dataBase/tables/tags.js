const sequelize = require("sequelize");
const tags = sequelize.define("tags", {
        id: {
            type: Sequelize.INT,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        // options
    }
);
module.exports = tags;