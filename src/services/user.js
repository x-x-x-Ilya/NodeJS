var repository = require(`./src/repositories/user`);

class UserServices {

    user_repository =  new repository();

    create(user) {
        return  this.user_repository.create(user);
    }

}

