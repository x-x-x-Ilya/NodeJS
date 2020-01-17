const Repository = require('../repositories/user');

const userRepository = new Repository();

class userServices {

   async createUser(data) {

       if( data.email     === undefined ||
           data.firstName === undefined ||
           data.lastName  === undefined ||
           data.password  === undefined) {
           console.log('data is undefined, check it');
           return false;
       }
          else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
           await userRepository.createUser(data);
           return true;
       }
          else {
          console.log('email is not valid, use true email');
          return false;
          }
   }

  async getUser(data) {

       if( data.email     === undefined &&
          (data.firstName === undefined || data.lastName  === undefined) &&
          data.id === undefined) {
          console.log('data is undefined, check it');
          return false;
       }
       else {
           await userRepository.getUser(data);
       }

  }

  async getAllUser() {
      await userRepository.getAllUsers().then(() => {
          return true;
      });
  }

  async deleteUser(data) {
      //if(await userRepository.getUser(data) === ?) {
      if(data.email === undefined && data.id === undefined) {
          console.log('data is undefined, check it');
          return false;
      }
      else
      await userRepository.deleteUser(data).then(() => {
          return true;
      });
  }

  async updateUser(data) {
      //if(await userRepository.getUser(data) === ?) {
        await userRepository.updateUser(data).then(() => {
            return true;
        });
      //}
      //else {
       //   return 404;
      //}
  }

}
module.exports = userServices;
