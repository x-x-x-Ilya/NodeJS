const sequelize = require("sequelize");
const roles = sequelize.define('roles', {
        id: {
            type: Sequelize.INT,
            primaryKey: true
        },
        name:{
            type: Sequelize.STRING
        }
        }, {
        // options
    });
module.exports = roles;