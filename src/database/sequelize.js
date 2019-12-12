const Sequelize = require("sequelize");
require('dotenv').config();

//var db = process.env.DB_HOST;
//var user =  process.env.DB_USER;
//var password =  process.env.DB_PASS;

const sequelize = new Sequelize(/*db, user, password,*/ process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASS, {
    dialect: "mysql",
    host: "localhost",
    dialectOptions: {connectTimeout: 1000},
    pool: {min: 0, max: 5, idle: 10000, acquire: 30000}
});

module.exports = sequelize;