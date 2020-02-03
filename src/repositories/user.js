const User = require('../database/models/user');

class UserRepository {

    //console.log(user.get({plain: true}));
    //console.log(posts.map(post => post.toJSON()));

  async createUser(data) {
      return await User.create({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          password: data.password,
          deleteReq: false
      });
  }

  async getUserById(data) {
      return  User.findOne({
          attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
          where: {
              id: data.id,
          }
      });
  }

  async getUserByEmail(data) {
      return  User.findOne({
          attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
          where: {
              email: data.email,
          },
      });
  }

  async getUserByFullName(data) {
       if (data.email === undefined && data.id === undefined) {
           return  User.findAll({
               attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
               where: {
                   firstName: data.firstName,
                   lastName: data.lastName,
               },
           });
       }
   }

  async getAllUsers() {
      return  User.findAll({attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
      });
  }

  async deleteUser(user) {
      await user.destroy({});
      return user;
  }

  async updateUser(data, user) {
      await user.update({
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
