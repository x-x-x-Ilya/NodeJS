const User = require('../database/models/user');

class UserRepository {

  async createUser(data) {
      await User.create({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
        deleteReq: false,
      }).then((user) => {
          console.log(user.get({plain: true}));
          });
  }


  async getUser(data) {

      if (data.email === undefined &&
          (data.firstName === undefined || data.lastName  === undefined)) {
          await User.findOne({
              attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
              where: {
                  id: data.id,
              },
          }).then((user) => {
              console.log(user.get({plain: true}));
              /*console.log(
                  `id: ${note.id},
                  email: ${note.email},
                  firstName: ${note.firstName},
                  lastName: ${note.lastName},
                  deleteReq: ${note.deleteReq}`);*/
          });

      }

      if((data.firstName === undefined || data.lastName  === undefined) &&
          data.id === undefined) {
          await User.findOne({
              attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
              where: {
                  email: data.email,
              },
          }).then((user) => {
              console.log(user.get({plain: true}));
          });

      }

      if(data.email === undefined && data.id === undefined) {
          await User.findAll({
              attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
              where: {
                  firstName: data.firstName,
                  lastName: data.lastName,
              },
          }).then(users => {
              console.log(users.map(user => user.toJSON()));
          });
      }
      }


  async getAllUsers() {
      await User.findAll({attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
      }).then(users => {
        console.log(users.map(user => user.toJSON()))
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
          await User.findOne({
              where: {
                  id: data.id
              }
          }).then((user) => {
              console.log(user.get({plain: true}));
              user.destroy({});
          });
      }

      if(data.id === undefined ) {
          await User.findOne({
              where: {
                  email: data.email
              }
          }).then((user) => {
              console.log(user.get({plain: true}));
              user.destroy({});
          });
      }
  }


  async updateUser(data) {
      await User.findOne({
          where: {
              id: data.id,
          },
      }).then((user) => {

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
      });

  }

}
module.exports = UserRepository;
