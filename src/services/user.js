const Repository = require('../repositories/user');

const userRepository = new Repository();

class userServices {

  async createUser(data) {

      if (!data.email || !data.firstName || !data.lastName || !data.password) {
          return 'Data is undefined, check it';
          /*
                } else if (await userRepository.getUserByEmail()) {
                    return 'This mail is already in use. Please use another mail';
          */
      } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
          return 'Email is not valid, use true email';
      } else {
          //} else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
          return await userRepository.createUser(data);
      }
  }

  async getUser(data) {
      if (!data.email && (!data.firstName || !data.lastName) && !data.id) {
          return 'Data is undefined, check it';
      } else if (!data.email && (!data.firstName || !data.lastName)) {
          return await userRepository.getUserById(data);
      } else if ((!data.firstName || !data.lastName) && !data.id) {
          return await userRepository.getUserByEmail(data);
      } else if (!data.email && !data.id) {
          return await userRepository.getUserByFullName(data);
      } else
          return 'Services error';
  }

  async getAllUser() {
      return await userRepository.getAllUsers();
  }

  async deleteUser(data) {
      if (!data.email && !data.id) {
          return 'Services error, data is undefined, check it';
      } else if (!data.email) {
          return await userRepository.getUserById().then((user) => {
              return userRepository.deleteUser(user);
          });
      } else if (!data.id) {
          return await userRepository.getUserByEmail().then((user) => {
              return userRepository.deleteUser(user);
          });
      } else
          return 'Services error';
  }

  async updateUser(data) {

     /* if (userRepository.getUserById(data)) {
       return //такого пользователя не существует
      }
      */
     /*else if(userRepository.getUserByEmail(data)){
         return // такая почта уже занята
     }
     else*/
     return await userRepository.getUserById(data).then((user) =>  {
          //const userBeforeUpdate = user;
          if(data.email === undefined) data.email = user.email;
          if(data.firstName === undefined) data.firstName = user.firstName;
          if(data.lastName === undefined) data.lastName = user.lastName;
          if(data.password === undefined) data.password = user.password;
          if(data.deleteReq === undefined) data.deleteReq = user.deleteReq;
          //'before update:\n' + userBeforeUpdate + 'after update:\n' + userRepository.updateUser(data, user) ;
            return  userRepository.updateUser(data, user);
      });
  }

}
module.exports = userServices;
