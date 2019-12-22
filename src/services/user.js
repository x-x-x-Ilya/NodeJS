const repository = require("../repositories/user");


userRepository =  new repository();

class UserServices {

     createUser(userData) {
         const user = userRepository.createUser(userData);
         return  userRepository.getUser(userData);
    }

    async getUser(id) {
        return await userRepository.getUser(id);
    };

    async getAllUser() {
        return await userRepository.getAllUsers();
    };

    async deleteUser(id) {
        return await userRepository.deleteUser(id);
    };

}

module.exports = UserServices;