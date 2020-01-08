const Repository = require('../repositories/user');

const userRepository = new Repository();

class userServices {

  async createUser(data) {
    try {
      await userRepository.createUser(data).then(answer);
      return answer;
    } catch (e) {
      console.log('Services error', e);
      return 404;
    }
  }


  async getUser(data) {
    try {
      await userRepository.getUser(data).then(answer);
      return answer;
    } catch (e) {
      console.log('Services error', e);
      return 404;
    }
  }

  async getAllUser() {
    try {
      await userRepository.getAllUsers().then(answer);
      return answer;
    } catch (e) {
      console.log('Services error', e);
    }
  }

  async deleteUser(data) {
    try {
      await userRepository.deleteUser(data).then(answer);
      return answer;
    } catch (e) {
      throw new console.log('Services error', e);
    }
  }

  async updateUser(data) {
    try {
      await userRepository.updateUser(data).then(answer);
      return answer;
    } catch (e) {
      throw new console.log('Services error', e);
    }
  }

}
module.exports = userServices;
