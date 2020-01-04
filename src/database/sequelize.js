const Sequel = require('sequelize');

try {
  module.exports = new Sequel(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASS, {
    dialect: 'mysql',
    host: process.env.HOST,
    dialectOptions: { connectTimeout: 1000 },
    pool: {
      min: 0, max: 5, idle: 10000, acquire: 30000,
    },
    define: {
      timestamps: false,
    },
  });
} catch (e) {
  console.log(' sequelize.js doesnt work');
}
