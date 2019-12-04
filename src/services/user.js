var repository = require(`./src/bin`);

class UserServices {
    user_repository =  new repository();

    async create(user) {
        return await this.user_repository.create(user);
    }

}

