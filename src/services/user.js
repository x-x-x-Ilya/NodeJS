const repository = require('../repositories/user');

const userRepository = new repository();

class userServices {
  /* createUser(userData) {
         return userRepository.createUser(userData);
     }
     */
  createUser(email, firstName, lastName, password) {
    return userRepository.createUser(email, firstName, lastName, password);
  }


  async getUser(userData) {
    return await userRepository.getUser(userData);
  }

  async getAllUser() {
    return await userRepository.getAllUsers();
  }

  async deleteUser(userData) {
    return await userRepository.deleteUser(userData);
  }
}

module.exports = userServices;
