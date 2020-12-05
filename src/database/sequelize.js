const Sequelize = require('sequelize');

try {
    module.exports = new Sequelize(
        process.env.DB_HOST,
        process.env.DB_USER,
        process.env.DB_PASS,
        {
            dialect: 'mysql',
            host: process.env.HOST,
            dialectOptions: {
                connectTimeout: 1000,
            },
            pool: {
                min: 0,
                max: 5,
                idle: 10000,
                acquire: 30000,
            },
            logging: false,
            define: {
                timestamps: false,
            },
        },
    );
} catch (error) {
    throw error;
}
