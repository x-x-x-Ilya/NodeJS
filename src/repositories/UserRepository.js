import { create, findOne, findAll } from '../database/models/user';
import Role from '../database/models/role';
import Post from '../database/models/post';

class UserRepository {
    async createUser(body) {
        return await create({
            email: body.email,
            firstName: body.firstName,
            lastName: body.lastName,
            password: body.password,
            deleteReq: body.deleteReq || false,
        });
    }

    async getUser(options) {
        return findOne({
            where: options,
            include: [
                {
                    model: Post,
                    attributes: ['caption', 'img'],
                    as: 'posts',
                },
                {
                    model: Role,
                    attributes: ['name'],
                    as: 'roles',
                },
            ],
        });
    }

    async getAllUsers(options) {
        return findAll({
            attributes: ['id', 'email', 'firstName', 'lastName', 'deleteReq'],
            where: options,
            include: [
                {
                    model: Role,
                    attributes: ['id', 'name'],
                    as: 'roles',
                },
            ],
        });
    }

    async updateUser(body, user) {
        await user.update({
            email: body.email,
            firstName: body.firstName,
            lastName: body.lastName,
            password: body.password,
            deleteReq: body.deleteReq,
        });
        return user;
    }

    async deleteUser(user) {
        user.destroy();
        return 'User has been deleted successfully';
    }
}

export default UserRepository;
