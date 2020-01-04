const Repository = require('../repositories/user');

const userRepository = new Repository();

class userServices {
  /* createUser(userData) {
         return userRepository.createUser(userData);
     }
     */
  async createUser(data) {
    try {
      return await userRepository.createUser(data);
    } catch (e) {
      console.log('undefined error Something wrong', e);
      return 404;
    }
  }


  async getUser(data) {
    try {
      return await userRepository.getUser(data);
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

  async deleteUser(data) {
    try {
      await userRepository.deleteUser(data).then(answer);
      return answer;
    } catch (e) {
      throw new console.log('undefined error Something wrong');
    }
  }

  async updateUser(data) {
    try {
      await userRepository.deleteUser(data).then(answer);
      return answer;
    } catch (e) {
      throw new console.log('undefined error Something wrong');
    }
  }

}
module.exports = userServices;
