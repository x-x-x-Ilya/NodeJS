const User = require("../database/models/user");

class UserRepository  {

     async createUser(user) {
        return await  User.create(user);
    }

    async getUser(userId) {
        return await User.get({
            where: {
                userId, include: [
                    {
                        model: Role,
                        attributes: ['name'],
                        through: {attributes: []},
                    },
                    // {
                    //     model: db.Post,
                    //     through: {attributes: []},
                    // },
                ],
            }
        });
    }

     getAllUsers() {
        return  User.findAll({
            include: [{
                model: Role,
                attributes: ["name"]
            }
            ]
        });
    }

    async deleteUser(id) {
         //if(getUser(userId) != null)
        return await User.destroy({
            where: {id},
        });
        //else
            //return error;
    }

    async updateUser(id) {
        return await User.update({
            where: {id},
        });
    }

}

module.exports = UserRepository;