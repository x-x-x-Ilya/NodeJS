const User = require('../database/models/user');

class UserRepository {

    //console.log(user.get({plain: true}));
    //console.log(posts.map(post => post.toJSON()));

  async createUser(body) {
      return await User.create({
          email: body.email,
          firstName: body.firstName,
          lastName: body.lastName,
          password: body.password,
          deleteReq: false
      });
  }

  async getUserById(body) {

      return User.findOne({
          attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
          where: {
              id: body.id,
          }
      });
  }

  async getUserByEmail(body) {
      return  User.findOne({
          attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
          where: {
              email: body.email,
          },
      });
  }

  async getUserByFullName(body) {
           return  User.findAll({
               attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
               where: {
                   firstName: body.firstName,
                   lastName: body.lastName,
               },
           });
   }

  async getAllUsers() {
      return  User.findAll({attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
      });
  }

  async sendDeleteRequest(user) {
      await user.update({
          deleteReq: true,
      });
      return user;
  }

  async updateUser(body, user) {
      await user.update({
          email: body.email,
          firstName: body.firstName,
          lastName: body.lastName,
          password: body.password,
          deleteReq: body.deleteReq,
      });
      return user;
  }

}
module.exports = UserRepository;
