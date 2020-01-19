const Repository = require('../repositories/user');

const userRepository = new Repository();

class userServices {

   async createUser(data) {

       if( data.email     === undefined ||
           data.firstName === undefined ||
           data.lastName  === undefined ||
           data.password  === undefined) {
           return 'Services error, data is undefined, check it';
       }
          else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
           return await userRepository.createUser(data);
       }
          else {
          return 'Services error, email is not valid, use true email';
          }
   }

  async getUser(data) {
       if( data.email     === undefined &&
          (data.firstName === undefined || data.lastName  === undefined) &&
          data.id === undefined) {
           return 'Services error, data is undefined, check it';
       }
       else {
           return await userRepository.getUser(data);
       }
  }

  async getAllUser() {
      return await userRepository.getAllUsers();
  }

  async deleteUser(data) {
      //if(await userRepository.getUser(data) === ?) {
      if(data.email === undefined && data.id === undefined) {
          return 'Services error, data is undefined, check it';
      }
      else
          return await userRepository.deleteUser(data);
  }

  async updateUser(data) {
      //if(await userRepository.getUser(data) === ?) {
      return await userRepository.updateUser(data);
  }

}
module.exports = userServices;
