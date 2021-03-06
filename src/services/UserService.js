import User from '../database/models/user';
import Repository from '../repositories/UserRepository';
const userRepository = new Repository();

class UserService {
    async createUser(body) {
        if (
            !body.email ||
            !body.firstName ||
            !body.lastName ||
            !body.password
        ) {
            return 'Data is undefined, check it';
        }
        //else if (await userRepository.getUserByEmail(body) !== null) {
        //return 'This mail is already in use. Please use another mail';
        // }
        else if (
            !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(body.email)
        ) {
            return 'Email is not valid, use true email';
        } else {
            return await userRepository.createUser(body);
        }
    }

    async getUser(body) {
        return !body.email && (!body.firstName || !body.lastName) && !body.id
            ? 'Data is undefined, check it'
            : await userRepository.getUser(body);
    }

    async getAllUser(body) {
        return await userRepository.getAllUsers(body);
    }

    async updateUser(body, user) {
        if (body.email != undefined)
            if (
                (await User.findOne({ where: { email: body.email } })) !== null
            ) {
                return 'This email is already use';
            }

        if (!body.email) body.email = user.email;
        if (!body.firstName) body.firstName = user.firstName;
        if (!body.lastName) body.lastName = user.lastName;
        if (!body.password) body.password = user.password;
        if (!body.deleteReq) body.deleteReq = user.deleteReq;
        return userRepository.updateUser(body, user);
    }

    async deleteUser() {
        const user = await User.findOne({
            where: {
                deleteReq: true,
            },
        });
        return await userRepository.deleteUser(user);
    }
}

export default UserService;
