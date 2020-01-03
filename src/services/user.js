const Repository = require('../repositories/user');

const userRepository = new Repository();

class userServices {
  /* createUser(userData) {
         return userRepository.createUser(userData);
     }
     */
  async createUser(email, firstName, lastName, password) {
    try {
      return await userRepository.createUser(email, firstName, lastName, password);
    } catch (e) {
      console.log('undefined error Something wrong', e);
      return 404;
    }
  }


  async getUser(findingField, field) {
    try {
      return await userRepository.getUser(findingField, field);
    } catch (e) {
       console.log('undefined error Something wrong', e);
       return 404;
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
