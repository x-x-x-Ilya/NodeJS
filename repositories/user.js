var db = require(`../database/tables/index`)

class User {
    async create(user) {
    return await db.User.create(user);
    }
}

module.exports = User;