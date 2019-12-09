const sequelize = require("./sequelize");
/*
* connect before adding dependency
*/
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

/*
* connect  after dependency
*/
sequelize.sync().then(result=>{
    console.log(result);
})
    .catch(err=> console.log(err));

// test of sync sequelize models and models in database