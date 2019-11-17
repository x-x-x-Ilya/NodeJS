//connection
const Sequelize = require("sequelize");
const sequelize = new Sequelize("usersdb2", "root", "123456", {
    dialect: "mysql",
    host: "localhost",
    define: {
        timestamps: false       //  disconnects createdAt and updatedAt columns
    }
});
const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
//const sequelize = new Sequelize('database', 'username', 'password', {
 //   host: 'localhost'//,
    //dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
//});
// Option 2: Passing a connection URI
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

// test of connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// init tables
const User = sequelize.define('user', {
    // attributes
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
        requestToDelete:{
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    SurName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Ava: {
        type: Sequelize.ABSTRACT  // i do not know what type is.
    }
    }, {
    // options
});

const Admin = sequelize.define('admin', {  // i have problems with this table.
        // attributes
        Id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        userId:{
            type: Sequelize.INTEGER
        }
    },
 {
    // options
});

const Post = sequelize.define('post', {
    // attributes
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    OwnerId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Text: {
      type: Sequelize.STRING,
        allowNull: true
    },
    Img: {
        type: Sequelize.ABSTRACT,  // i do not know what type is.
        allowNull: true         // but if no text and no image must be error.
    }
}, {
    // options
});

const Like = sequelize.define('like', {
    // attributes
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    OwnerId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    PostId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {
    // options
});
//
// intermediate entity, which binds the administrator and the user
const Enrolment = sequelize.define("enrolment", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
});

//dependences
User.hasMany(Like);
User.hasMany(Post);
Post.hasMany(Like);
User.belongsToMany(Admin, {through: Enrolment});
Admin.belongsToMany(User, {through: Enrolment});
//User.hasOne(Admin, { });
//examples
//Coach.hasOne(Team, { onDelete: "cascade"});
//Company.hasMany(Product);   один-ко-многим (1 компания - много товаров)


// test of correct this tables and tables in database
sequelize.sync().then(result=>{
    console.log(result);
})
    .catch(err=> console.log(err));
