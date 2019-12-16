var db = require("../database/models/index");

class UserRepository  {

     createUser(user) {
        return  db.User.create(user);
    }

    async getUser(userId) {
        return await db.User.get({
            where: {
                userId, include: [  {
                        model: db.Role,
                        attributes: ['name'],
                        through: {attributes: []},
                    },
                ],
            }
        });
    }

     getAllUsers() {
        return  db.User.findAll({
            include: [{
                model: db.Role,
                attributes: ["name"]
            }
            ]
        });
    }

    async deleteUser(id) {
        return await db.User.destroy({
            where: {id},
        });
    }

    async updateUser(id) {
        return await db.User.update({
            where: {id},
        });
    }

}

module.exports = UserRepository;