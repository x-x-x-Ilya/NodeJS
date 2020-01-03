const User = require('../database/models/user');
const Role = require('../database/models/role');
const Post = require('../database/models/post');

class UserRepository {

  async createUser(email, firstName, lastName, password) {   // add answer
    try {
       await User.create({
        email: email,
        first_name: firstName,
        last_name: lastName,
        password: password,
        delete_req: false,
      });
      return 201;
    } catch (e) {
      console.log('undefined error Something wrong', e);
      return 404;  // не отправляет 404 при ошибке, но обрабатывает ее.
    }
  }

   async getUser(findingField, field) {
    if (findingField === 'id') {
      let answ;
      try {
         answ = await User.findOne({
          attributes: ['id', 'email', 'first_name', 'last_name', 'delete_req'],
           /*include: [{
             model: Role,
             attributes: ['name'],
           }],
           include: [{
             model: Post,
             attributes: ['img', 'caption', 'created_at'],
             where:{
               user_id:'id',
             }
           }],*/
          where:{
            id: field,
          },
          });
        console.log(answ);
        return answ;
      } catch (e) {
        console.log('undefined error Something wrong', e);
        return 404;
      }
    }

    if (findingField === 'email') {
      let answ;
      try {
        answ = await User.findOne({
          attributes: ['id', 'email', 'first_name', 'last_name', 'delete_req'],
          /*include: [{
            model: Role,
            attributes: ['name'],
          }],
          include: [{
            model: Post,
            attributes: ['img', 'caption', 'created_at'],
            where:{
              user_id:'id',
            }
          }],*/
          where:{
            email: field,
          },
        });
        console.log(answ);
        return answ;
      } catch (e) {
        console.log('undefined error Something wrong', e);
        return 404;
      }
    }
  }

  async getAllUsers() {
    try {
      const mass = await User.findAll({
        /*include: [{
          model: Role,
          attributes: ['name'],
        }],*/
        where:{
          id,
        },
      });
    } catch (e) {
      console.log('undefined error Something wrong');
    }
    // return  this mass
  }

  async deleteUser(data) {
    if (await UserRepository.getUser(data) === User) {
      try {
        await User.destroy({
          where: {
            id: data.id,
          },
        });
      } catch (e) {
        console.log('undefined error Something wrong');
      }
      return 201;
    }
  }

  async updateUser(data) {
    if (await UserRepository.getUser(data) === User) {
      try {
        await User.update({
          email: data.email, // если поля нет то оставить значение которое было
          first_name: data.firstName,
          last_name: data.lastName,
          password: data.password,
        });
      } catch (e) {
        console.log('undefined error Something wrong');
      }
      return 201;
    }
  }
}
module.exports = UserRepository;
