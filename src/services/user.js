const Repository = require('../repositories/user');

const userRepository = new Repository();

let answer;

class userServices {

  async createUser(data) {
      if(data.isEmail) {
          await userRepository.createUser(data).then(answer);
          return answer;
      }
      else {
          return 406;
      }
    }

  async getUser(data) {
      await userRepository.getUser(data).then(answer);
      return answer;
  }

  async getAllUser() {
      await userRepository.getAllUsers().then(answer);
      return answer;
  }

  async deleteUser(data) {
      if(await this.getUser(data) === 200) {
          await userRepository.deleteUser(data).then(answer);
          return answer;
      }
      else {
          return 404;
      }
  }

  async updateUser(data) {
      if(await this.getUser(data) === 200) {
        //await userRepository.getUser(data);
        await userRepository.updateUser(data).then(answer);
        return answer;
      }
      else {
          return 404;
      }
  }

}
module.exports = userServices;
