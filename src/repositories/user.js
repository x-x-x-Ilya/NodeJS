var db = require(`./src/database/models/index`);

class User {

    async create(user) {
        return await db.User.create(user);
    }

     async login(mail, password) {
         return await db.User.get({
      where: {mail:mail, password:password},
     });
    }

    async delete(id) {
        return await db.User.destroy({
            where: {id:id},
        });
    }

    async update(id) {
        return await db.User.update({
            where: {id:id},
        });
    }



}
module.exports = User;