const Sequelize = require("sequelize");

var db = "instagram";
var user = "root";
var password = "root";

const sequelize = new Sequelize(db, user, password, {
    dialect: "mysql",
    host: "localhost",
    dialectOptions: {connectTimeout: 1000},
    pool: {min: 0, max: 5, idle: 10000, acquire: 30000}
});

module.exports = sequelize;