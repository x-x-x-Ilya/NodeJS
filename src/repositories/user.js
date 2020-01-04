const User = require('../database/models/user');
const Role = require('../database/models/role');
const Post = require('../database/models/post');

class UserRepository {

  async createUser(data) { // add answer
    try {
      await User.create({
        email: data.email,
        first_name: data.firstName, // firstName,
        last_name: data.lastName, // lastName,
        password: data.password,
        delete_req: false,
      });
      return 201;
    } catch (e) {
      console.log('undefined error Something wrong', e);
      return 404; // не отправляет 404 при ошибке, но обрабатывает ее.
    }
  }

  async getUser(data) {

    if (data.findingField === 'id') {

      try {
        await User.findOne({
          attributes: ['id', 'email', 'first_name', 'last_name', 'delete_req'],
           /*include: [{
             model: Role,
             attributes: ['name'],
           }],
           include: [{
             model: Post,
             attributes: ['img', 'caption', 'created_at'],
             where:{
               user_id:'data.id',
             }
           }],*/
          where: {
            id: data.id,
          },
        }).then((note) => {
          console.log(note.get({plain: true}));
          console.log('********************');
          console.log(`id: ${note.id}, email: ${note.email}, first_name: ${note.first_name}, 
        last_name: ${note.last_name}, delete_req: ${note.delete_req}`);
        });
        return 200;
      } catch (e) {
        console.log('undefined error Something wrong', e);
        return 404;
      }

    } else if (data.findingField === 'email') {

      try {
        await User.findOne({
          attributes: ['id', 'email', 'first_name', 'last_name', 'delete_req'],
          /* include: [{... line 30 */
          where: {
            email: data.email,
          },
        }).then((note) => {
          console.log(note.get({plain: true}));
          console.log('********************');
          console.log(`id: ${note.id}, email: ${note.email}, first_name: ${note.first_name}, 
        last_name: ${note.last_name}, delete_req: ${note.delete_req}`);
        });
        return 200;
      } catch (e) {
        console.log('undefined error Something wrong', e);
        return 404;
      }
    } else if (data.findingField === 'firstName lastName') {
      /*
      * Ctrl + v;
      * */
    }
  }

  async getAllUsers() {
    try {
      await User.findAll({attributes: ['id', 'email', 'first_name', 'last_name', 'delete_req'],}).then(users => {
        console.log(users.map(user => user.toJSON()))
      });
      return 200;
      /*const mass = await User.findAll({
         include: [{
          model: Role,
          attributes: ['name'],
        }],
      });*/


    } catch (e) {
      console.log('undefined error Something wrong');
      return 404;
    }
    // return  this mass
  }

  async deleteUser(data) {
    //if (UserRepository.prototype.getUser(data) === 200) {
      try {
        await User.destroy({
          where: {
            id: data.id,
          },
        });
        return 200;
      } catch (e) {
        console.log('undefined error Something wrong', e);
        return 404;
      }
    //}
  }

  async updateUser(data) {
    if (await UserRepository.prototype.getUser(data) === User) {
      try {
        await User.update({
          id: data.id,
          email: data.email, // если поля нет то оставить значение которое было
          first_name: data.firstName,
          last_name: data.lastName,
          password: data.password,
          delete_req: data.delete_req,
        });
        return 200;
      } catch (e) {
        console.log('undefined error Something wrong', e);
        return 404;
      }
    }
  }
}
module.exports = UserRepository;
