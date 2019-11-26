const sequelize = require("sequelize");
sequelize.sync().then(result=>{
    console.log(result);
})
    .catch(err=> console.log(err));

// test of sync sequelize tables and tables in database