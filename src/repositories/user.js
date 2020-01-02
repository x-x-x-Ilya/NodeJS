const User = require('../database/models/user');
const Role = require('../database/models/role');

class UserRepository {
  async createUser(email, firstName, lastName, password) {
    // console.log(email);   ++
    try {
      await User.create({
        email,
        firstName,
        lastName,
        password,
        delete_req: false,
      });
    } catch (e) {
      console.log('undefined error Something wrong');
    }
    return 201;
  }

  async getUser(data) {
    if (data.field.toString() === 'id') {
      try {
        return await User.findOne({
          id: data.id,
        });
      } catch (e) {
        console.log('undefined error Something wrong');
      }
    }

    if (data.field.toString() === 'e-mail') {
      try {
        return await User.findOne({
          email: data.email,
        });
      } catch (e) {
        console.log('undefined error Something wrong');
      }
    }
  }

  async getAllUsers() {
    try {
      const mass = await User.findAll({
        model: Role,
        attributes: ['name'],
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
          id: data.id,
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
