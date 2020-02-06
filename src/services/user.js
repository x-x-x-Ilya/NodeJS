const User = require('../database/models/user');

const Repository = require('../repositories/user');
const userRepository = new Repository();

class userServices {

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
        }
        else
            return await userRepository.getUser(body);
    }

    async getAllUser(body) {
        return await userRepository.getAllUsers(body);
    }

    async updateUser(body, user) {

        if (await User.findOne({where: {email: body.email}}) !== null) {
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

        if(body.id === user.id) return 'You can not delete own account';
        const deleteUser = await userRepository.getUser(body);

        if (!deleteUser) {
             return await userRepository.deleteUser(deleteUser);
         } else
             return 'This user is not exists';
    }

}
module.exports = userServices;
