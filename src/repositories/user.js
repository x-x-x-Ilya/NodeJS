const User = require('../database/models/user');
//const Role = require('../database/models/role');
//const Post = require('../database/models/post');

class UserRepository {

  async createUser(data) {

    /* include: [{
         model: Role,
         attributes: ['name'],
       }],
       include: [{
       model: Post,
       attributes: ['img', 'caption', 'created_at', 'user_id', 'id'],
       }],
       post_tags & likes
    */

      await User.create({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
        deleteReq: false,
      });
      return 201;
  }

  async getUser(data) {

    await User.findOne({
        attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
          where: {
            id: data.id,
          },
        }).then((note) => {
          console.log(note.get({plain: true}));
          /*console.log('********************');
          console.log(
              `id: ${note.id}, 
              email: ${note.email}, 
              firstName: ${note.firstName},
              lastName: ${note.lastName},
              deleteReq: ${note.deleteReq}`);*/
        });

    await User.findOne({
            attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
            where: {
              email: data.email,
            },
          }).then((note) => {
            console.log(note.get({plain: true}));
          });


    await User.findAll({
              attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
              where: {
                firstName: data.firstName,
                lastName: data.lastName,
              },
            }).then(users => {
              console.log(users.map(user => user.toJSON()))
            });
            return 200;
      }


  async getAllUsers() {

      await User.findAll({attributes: [
          'id',
          'email',
          'firstName',
          'lastName',
          'deleteReq'],
      }).then(users => {
        console.log(users.map(user => user.toJSON()))
      });
      return 200;
  }

  async deleteUser(data) {
      await User.destroy({
        where: {
          id: data.id,
        },
      });
      return 200;
  }

  async updateUser(data) {
      await User.update({
        email: data.email, // если поля нет то оставить значение которое было
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
        deleteReq: data.deleteReq,
      });
      return 200;
  }

}
module.exports = UserRepository;
