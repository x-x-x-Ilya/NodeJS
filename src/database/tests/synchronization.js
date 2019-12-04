const sequelize = require("../sequelize");
sequelize.sync().then(result=>{
    console.log(result);
})
    .catch(err=> console.log(err));

// test of sync sequelize models and models in database