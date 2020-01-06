const User = require('../database/models/user');
const Role = require('../database/models/role');
const Post = require('../database/models/post');

class UserRepository {

  async createUser(data) {

    //добавлять ли проверку на уникальность почты(MySQL всё равно сообщает о ней)

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

    try {
      await User.create({
        email: data.email,
        first_name: data.firstName,
        last_name: data.lastName,
        password: data.password,
        delete_req: false,
      });
      return 201;
    } catch (e) {
      console.log('Repositories error', e);
      return 404; // не отправляет 404 при ошибке, но обрабатывает ее.
    }
  }

  async getUser(data) {
    try {
      if (data.findingField === 'id') {
        await User.findOne({
          attributes: ['id', 'email', 'first_name', 'last_name', 'delete_req'],
          where: {
            id: data.id,
          },
        }).then((note) => {
          console.log(note.get({plain: true}));
          console.log('********************');
          console.log(
              `id: ${note.id}, 
              email: ${note.email}, 
              first_name: ${note.first_name}, 
              last_name: ${note.last_name}, 
              delete_req: ${note.delete_req}`);
        });
        return 200;
      }
      else if (data.findingField === 'email') {
        await User.findOne({
          attributes: ['id', 'email', 'first_name', 'last_name', 'delete_req'],
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
      }
    } catch (e) {
      console.log('Repositories error', e);
      return 404;
    }
    //if (data.findingField === 'firstName lastName') {}

      /*try {
        const field = data.findingField;
        let findingFieldValue;

        if (data.findingField === 'id') {
          findingFieldValue = data.id;
        }
        else if (data.findingField === 'email') {
          findingFieldValue = data.email;
        }
        //else if (data.findingField === 'firstName lastName') {  // можно записать ч-з сплит
        //  findingFieldValue = data.email;
        //}
        await User.findOne({
          attributes: ['id', 'email', 'first_name', 'last_name', 'delete_req'],
          where: {
            field: findingFieldValue,   // should be == field in 27 line
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
*/
    }


  async getAllUsers() {

    try {
      await User.findAll({attributes: [
          'id',
          'email',
          'first_name',
          'last_name',
          'delete_req'],
      }).then(users => {
        console.log(users.map(user => user.toJSON()))
      });
      return 200;
    } catch (e) {
      console.log('Repositories error', e);
      return 404;
    }
  }

  async deleteUser(data) {
    //добавлять ли проверку на существование(MySQL всё равно выдаст ошибку)
    //if (UserRepository.prototype.getUser(data) === 200) {
    try {
      await User.destroy({
        where: {
          id: data.id,
        },
      });
      return 200;
    } catch (e) {
      console.log('Repositories error', e);
      return 404;
    }
  }

  async updateUser(data) {
    //добавлять ли проверку на существование(MySQL всё равно выдаст ошибку)
    //if (await UserRepository.prototype.getUser(data) === 200) {
    //if(data.first_name === undefined) data.first_name = first_name;

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
      console.log('Repositories error', e);
      return 404;
    }
  }

}
module.exports = UserRepository;
