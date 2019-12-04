const Sequelize = require("sequelize");

var db = "instagram";
var user = "root";
var password = "root";

const sequelize = new Sequelize(db, user, password, {
    dialect: "mysql",
    host: "localhost",
    dialectOptions: {connectTimeout: 1000},
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = sequelize;