const repository = require("../repositories/user");

userRepository =  new repository();

class UserServices {

    /* createUser(userData) {
         return userRepository.createUser(userData);
     }
     */
    createUser(email, first_name, last_name, password) {
        return userRepository.createUser(email, first_name, last_name, password);
    }


    async getUser(userData) {
        return await userRepository.getUser(userData);
    };

    async getAllUser() {
        return await userRepository.getAllUsers();
    };

    async deleteUser(userData) {
        return await userRepository.deleteUser(userData);
    };

}

module.exports = UserServices;