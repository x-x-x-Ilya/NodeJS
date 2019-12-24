const repository = require("../repositories/user");

userRepository =  new repository();

class UserServices {

     createUser(userData) {
         //let user = userRepository.createUser(userData);
         return userRepository.createUser(userData);
         //return  userRepository.getUser(userData);
        //return user;
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