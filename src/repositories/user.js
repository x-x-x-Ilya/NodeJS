const User = require('../database/models/user');

class UserRepository {

    //console.log(user.get({plain: true}));

  async createUser(data) {

      return await User.create({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          password: data.password,
          deleteReq: false
      });
  }

  async getUser(data) {
      if (data.email === undefined &&
          (data.firstName === undefined || data.lastName === undefined)) {
          return await User.findOne({
              attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
              where: {
                  id: data.id,
              }
          });
      }

      if((data.firstName === undefined || data.lastName  === undefined) &&
          data.id === undefined) {
          return await User.findOne({
              attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
              where: {
                  email: data.email,
              },
          });

      }

      if(data.email === undefined && data.id === undefined) {
          return await User.findAll({
              attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
              where: {
                  firstName: data.firstName,
                  lastName: data.lastName,
              },
          });
      }
  }


  async getAllUsers() {
      return await User.findAll({attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
      });
  }

  async deleteUser(data) {

     /* await UserRepository.prototype.getUser(data).then((user) => {
          console.log('user id: ', user.id);
           User.destroy({
              where: {
                  id: user.id
              }
          });
      });
  }*/
      if(data.email === undefined ) {
          const user = await User.findOne({
              where: {
                  id: data.id
              }
          });
          user.destroy({});
          return user;
      }

      if(data.id === undefined ) {
          const user = await User.findOne({
              where: {
                  email: data.email
              }
          });
              user.destroy({});
              return user;
      }
  }


  async updateUser(data) {
      const user = await User.findOne({
          where: {
              id: data.id,
          },
      });
          if(data.email === undefined) data.email = user.email;
          if(data.firstName === undefined) data.firstName = user.firstName;
          if(data.lastName === undefined) data.lastName = user.lastName;
          if(data.password === undefined) data.password = user.password;
          if(data.deleteReq === undefined) data.deleteReq = user.deleteReq;

           user.update({
              email: data.email,
              firstName: data.firstName,
              lastName: data.lastName,
              password: data.password,
              deleteReq: data.deleteReq,
          });
      return user;
  }

}
module.exports = UserRepository;
