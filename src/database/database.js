const sequelize = require('./sequelize');

exports.authentication = () => {
  sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    }).catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
};

exports.ModelsSynchronization = () => {
  sequelize.sync()
    .then(() => {
      console.log('synchronization has been established successfully.');
    }).catch((err) => {
      console.log('Unable to sync with the database:', err);
    });
};
