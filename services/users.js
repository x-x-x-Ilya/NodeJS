var rep = require(`../repositories/user`);

class UserServices {
    _repository =  new rep();

    async create(user) {
        return await this._repository.create(user);
    }

}

