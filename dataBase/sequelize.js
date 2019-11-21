//connection
const Sequelize = require("sequelize");
const sequelize = new Sequelize("usersdb2", "root", "123456", {
    dialect: "mysql",
    host: "localhost",
    //define: {
        //timestamps: false       //  disconnects createdAt and updatedAt columns
    //}
});
module.exports = sequelize;
// Option 2: Passing a connection URI
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');


