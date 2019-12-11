var db = require(`./src/database/models/index`);

class UserRepository  {

     createUser(user) {
        return  db.User.create(user);
    }

    async getUser(userId) {
        return await db.User.get({
            where: {
                id: userId, include: [  {
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
                attributes: ["id"]
            }
            ]
        });
    }

    async deleteUser(id) {
        return await db.User.destroy({
            where: {id:id},
        });
    }

    async updateUser(id) {
        return await db.User.update({
            where: {id:id},
        });
    }

}

module.exports = UserRepository;