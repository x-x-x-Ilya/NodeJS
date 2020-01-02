const Repository = require('../repositories/user');

const userRepository = new Repository();

class userServices {
  /* createUser(userData) {
         return userRepository.createUser(userData);
     }
     */
  createUser(email, firstName, lastName, password) {
    try {
      return userRepository.createUser(email, firstName, lastName, password);
    } catch (e) {
      throw new console.log('undefined error Something wrong');
    }
  }


  async getUser(userData) {
    try {
      return await userRepository.getUser(userData);
    } catch (e) {
      throw new console.log('undefined error Something wrong');
    }
  }

  async getAllUser() {
    try {
      return await userRepository.getAllUsers();
    } catch (e) {
      throw new console.log('undefined error Something wrong');
    }
  }

  async deleteUser(userData) {
    try {
      return await userRepository.deleteUser(userData);
    } catch (e) {
      throw new console.log('undefined error Something wrong');
    }
  }
}
module.exports = userServices;
