const User = require("../database/models/user");
const Role = require("../database/models/role");

class UserRepository  {

     async createUser(data) {
             try {
                     const user = await User.create({
                         email: data.email,
                         firstName: data.firstName,
                         lastName: data.lastName,
                         password: data.password
                     });

                 }
                 catch (e) {
                 if (e ) throw e;
                 throw new console.log("undefined error Something wrong");
             }
    //return await  User.create(user);
         };



    async getUser(user) {
        return await User.get({
            //where: {
                user, include: [
                    {
                        model: Role,
                        attributes: ['name'],
                    },
                ],
            //}
        });
    }

     getAllUsers() {
        return  User.findAll({
            include: [{
                model: Role,
                attributes: ["name"]
            }]
        });
    }

    async deleteUser(user) {
         //if(getUser(userId) != null)
        return await User.destroy({
            where: {
                user
            },
        });
        //else
        //return error;
    }

    async updateUser(user) {
        return await User.update({
            where: {user},
        });
    }

}

module.exports = UserRepository;