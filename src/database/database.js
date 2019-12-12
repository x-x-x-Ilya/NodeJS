const sequelize = require("./sequelize");

var authentication = sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


var synchronization = sequelize
    .sync()
    .then(() => {
    console.log('synchronization has been established successfully.');
})
    .catch(err => {
        console.log('Unable to sync with the database:', err);
    });


module.exports = {
    authentication,
    synchronization,
};