const Repository = require('../repositories/user');

const userRepository = new Repository();

class userServices {

    //} else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {

    async createUser(body) {
        if (!body.email || !body.firstName || !body.lastName || !body.password) {
            return 'Data is undefined, check it';
        } else if (await userRepository.getUserByEmail(body) !== null) {
            return 'This mail is already in use. Please use another mail';
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(body.email)) {
            return 'Email is not valid, use true email';
        } else {
            return await userRepository.createUser(body);
        }
    }

    async getUser(body) {

        if (!body.email && (!body.firstName || !body.lastName) && !body.id) {
            return 'Data is undefined, check it';
        } else if (!body.email && !body.id) {
            return await userRepository.getUserByFullName(body);
        }
        else
            return await userRepository.getUser(body);
    }

    async getAllUser() {
        return await userRepository.getAllUsers();
    }

    async sendDeleteRequest(user) {
        return userRepository.sendDeleteRequest(user);
    }

    async updateUser(body, user) {
        if (await userRepository.getUserByEmail(body) !== null) {
            return 'This email is already use';
        } else {
            if (!body.email) body.email = user.email;
            if (!body.firstName) body.firstName = user.firstName;
            if (!body.lastName) body.lastName = user.lastName;
            if (!body.password) body.password = user.password;
            if (!body.deleteReq) body.deleteReq = user.deleteReq;

            return userRepository.updateUser(body, user);
        }
    }

    async deleteUser(body, user) {
        // добавить проверку что не пытается удалить самого себя
        const deleteUser = await userRepository.getUserById(body);
        // if deleteUser exists
        return await userRepository.deleteUser(deleteUser);
    }

}
module.exports = userServices;
