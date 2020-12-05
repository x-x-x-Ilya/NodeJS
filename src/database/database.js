const database = require('./sequelize');

exports.authentication = async () => {
    try {
        await database.authenticate();
        return 'Database connection has been established successfully.';
    } catch (error) {
        return 'Unable to connect to the database:', error;
    }
};

exports.ModelsSynchronization = async () => {
    try {
        await database.sync();
        return 'Database synchronization has been established successfully.';
    } catch (error) {
        return 'Unable to sync with the database:', error;
    }
};
